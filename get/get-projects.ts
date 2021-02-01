import { OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";
import { exec, HOME, path } from "../deps.ts";
import { getValsJsonContent } from "../utils/vals.ts";
import { IProjectData } from "../utils/interfaces/ProjectData.interface.ts";
import { Fails } from "../utils/interfaces/Fails.interface.ts";
import { command, green, log, orange, red, yellow } from "../consts/consts.ts";

export async function getProjects() {
  const valsJson = await getValsJsonContent();

  const first = Object.entries(valsJson);
  const splitArr = first.map(([key, origin]) => {
    const [, thePath] = key.split("andredealbuquerque");
    const splitPath = thePath.split(/\/|\\/);
    const achievePathFromHome = path.join(HOME, ...splitPath);

    return [achievePathFromHome, origin];
  });
  const joined: IProjectData = Object.fromEntries(splitArr);
  const fails: Fails[] = [];
  for (const key in joined) {
    const struct = joined[key];
    const { origin, path: name } = struct;
    await Deno.mkdir(key, { recursive: true });
    await Deno.chdir(key);
    const { output } = await command("ls -a");
    if (output.split("\n").find((e) => e === ".git")) {
      orange(`${name} already exists. Skipping for now`);
      continue;
    }
    green(`About to start cloning ${name}`);
    green(`Origin: ${origin}`);

    const { status } = await exec(`git clone ${origin} .`, {
      output: OutputMode.Capture,
    });

    if (!status.success) {
      fails.push({
        origin,
        path: name,
        key,
      });
    }
  }
  if (fails.length) {
    red(`Problems in ${fails.length} folders`);
    log();
    log();
    log();
    fails.forEach((el) => {
      red(`Look into ${yellow(el.path)}`);
      log();
      orange(`${el.key}`);
    });
  }
}
