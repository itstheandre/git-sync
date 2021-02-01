import { OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";
import { FAIL_SAFE_REGEX, GIT_REMOTE, MAIN_REGEX } from "../consts/consts.ts";
import { exec, HOME, path } from "../deps.ts";

export async function getRemote(thePath: string) {
  Deno.chdir(path.join(HOME, thePath));
  const { output: git } = await exec(GIT_REMOTE, {
    output: OutputMode.Capture,
  });
  if (!git) {
    return;
  }
  const executed = MAIN_REGEX.exec(git);

  if (executed) {
    return executed[1];
  }

  if (!executed) {
    const secondTest = FAIL_SAFE_REGEX.exec(git);
    if (secondTest) {
      return secondTest[1].split("(")[0];
    }
  }
}
