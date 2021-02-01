import { path } from "../deps.ts";

export const allPaths = (str: string, thePath: string) =>
  str.split("\n").filter(Boolean).map((e) =>
    path.join(thePath, e).replace("/.git", "").replace("/.git", "")
  );
