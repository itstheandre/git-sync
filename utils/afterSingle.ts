import { TFolderVals } from "../consts/folders.ts";
import { getGitPath } from "./getGitPath.ts";
import { getProjectName } from "./getProjectName.ts";
import { getRemote } from "./getRemote.ts";
import { IAfterSingle } from "./interfaces/AfterSingle.interface.ts";

export async function afterSingle(
  single: string,
  goal: TFolderVals,
): Promise<IAfterSingle> {
  const origin = await getRemote(single);
  const projectName = getProjectName(single, goal);
  if (!projectName || !origin) {
    return;
  }
  const getPath = getGitPath(single, goal);
  return { name: projectName, origin, getPath };
}
