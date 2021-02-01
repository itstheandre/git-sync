import { HOME, path } from "../deps.ts";
import { writeJson } from "./writeJson.ts";

export async function writeToDrive(ob: any) {
  const drivePath = await moveToDrive();
  const jsonFile = path.join(drivePath, "vals2.json");
  return writeJson(jsonFile, ob);
}

async function moveToDrive() {
  const drivePath = path.join(HOME, "work");
  return drivePath;
}
