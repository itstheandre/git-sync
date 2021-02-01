import { fmt, path } from "../deps.ts";
import { IProjectData } from "../utils/interfaces/ProjectData.interface.ts";

export async function getValsJsonContent() {
  const HOME = Deno.env.get("HOME");
  if (!HOME) {
    console.error(fmt.red("Home not found"));
    Deno.exit(1);
  }
  const valsPath = path.join(HOME, "work", "vals2.json");
  const fileContent = await Deno.readTextFile(valsPath);
  const parsed = JSON.parse(fileContent) as IProjectData;
  return parsed;
}
