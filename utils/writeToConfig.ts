import { HOME, path } from "../deps.ts";
import { writeJson } from "./writeJson.ts";

export async function writeToConfig(ob: any) {
  const configPath = await moveToConfig();
  //   const cwd = Deno.cwd();
  //   Deno.wr

  const jsonFile = path.join(configPath, "vals.json");
  return writeJson(jsonFile, JSON.stringify(ob));
}

async function moveToConfig() {
  const configPath = path.join(HOME, ".config", "node-git", "get");
  await Deno.mkdir(configPath, { recursive: true });
  return configPath;
}
