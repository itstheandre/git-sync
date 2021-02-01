import { fmt, path } from "../deps.ts";

export async function getValsJsonContent() {
  const HOME = Deno.env.get("HOME");
  if (!HOME) {
    console.error(fmt.red("Home not found"));
    Deno.exit(1);
  }
  const valsPath = path.join(HOME, "work", "vals.json");
  const fileContent = await Deno.readTextFile(valsPath);
  return JSON.parse(fileContent);
}
