import { IProjectData } from "../utils/interfaces/ProjectData.interface.ts";
import { writeToConfig } from "../utils/writeToConfig.ts";
import { writeToDrive } from "../utils/writeToDrive.ts";

export async function afterGrouped(data: IProjectData[]) {
  const mapped = data.reduce((acc, val, i) => {
    const [[key, value]] = Object.entries(val);
    return { ...acc, [key.replace("\\", "")]: value };
  }, {});
  //   console.log(`mapped, `, mapped);
  await Promise.all([writeToConfig(data), writeToDrive(mapped)]);
}
