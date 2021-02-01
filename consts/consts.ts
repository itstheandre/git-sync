import {
  green as g,
  red as r,
  rgb24,
  yellow as y,
} from "https://deno.land/std@0.85.0/fmt/colors.ts";
import { OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";
import { exec } from "../deps.ts";

export const GIT_REMOTE = "git remote -v";
export const GET_ALL_GIT = "find . -name .git -type d -prune";
export const MAIN_REGEX = /.*\t(.+) .*/g;
export const FAIL_SAFE_REGEX = /origin\t(.*?)(fetch)/;

export const log = console.log;

export const orange = (s: string) =>
  log(rgb24(`${s}`, {
    r: 255,
    g: 140,
    b: 0,
  }));

export const green = (s: string) => log(g(s));

export const red = (s: string) => log(r(s));
export const yellow = (s: string) => log(y(s));

export const command = (s: string, output: boolean = true) =>
  exec(s, output ? { output: OutputMode.Capture } : undefined);
