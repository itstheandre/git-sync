import { TFolderVals } from "../consts/folders.ts";

export function getGitPath(thePath: string, goal: TFolderVals) {
  const [, ...folderStructure] = thePath.split(`${goal}/`);
  const folders = folderStructure.map((el) => el.split("/")).flat();

  const real = [goal, ...folders];
  return real;
}
