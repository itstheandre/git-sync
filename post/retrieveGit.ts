import { OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";
import { GET_ALL_GIT } from "../consts/consts.ts";
import { exec } from "../deps.ts";

export async function retrieveGit(path: string) {
  Deno.chdir(path);
  const { output } = await exec(GET_ALL_GIT, { output: OutputMode.Capture });
  return output;
}
