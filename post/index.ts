import { OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";
import { FOLDERVALS, TFolderVals } from "../consts/folders.ts";
import { GET_ALL_GIT } from "../consts/consts.ts";
import { exec, HOME, path } from "../deps.ts";
import { retrieveGit } from "./retrieveGit.ts";
import { allPaths } from "../utils/allPaths.ts";
import { afterSingle } from "../utils/afterSingle.ts";
import { IProjectData } from "../utils/interfaces/ProjectData.interface.ts";
import { afterGrouped } from "./afterGrouped.ts";

export async function postProjects() {
  const projectData: IProjectData[] = [];
  for (let project of FOLDERVALS) {
    const myPath = path.join(HOME, project);
    const allGits = await retrieveGit(myPath);
    const gitProjects = allPaths(allGits, project);
    for (let single of gitProjects) {
      const p = await afterSingle(single, project);
      if (!p) {
        continue;
      }

      const realPath = path.join(HOME, ...p.getPath);

      projectData.push({ [realPath]: { path: p.name, origin: p.origin } });
    }
  }
  afterGrouped(projectData);
}
