import { TFolderVals } from "../consts/folders.ts";

export function getProjectName(thePath: string, goal: TFolderVals) {
  const split = thePath.split(`${goal}`);
  const [, ...rest] = split;

  const rejoinAndReSplitOnSlash = rest.join("").split("/");

  const name = rejoinAndReSplitOnSlash.find((e, i, { length: l }) => {
    return /[0-9]/gi.test(e) || i === l - 1;
  });
  return name?.includes("00_") ? name.replace("00_", "") : name;
}
