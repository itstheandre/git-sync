import { green, orange, red } from "./consts/consts.ts";
import { fmt } from "./deps.ts";
import { getProjects } from "./get/get-projects.ts";
import { postProjects } from "./post/index.ts";
const { args } = Deno;

async function main() {
  if (args.length !== 1) {
    return red(`No argument was passed, not doing anything`);
  }
  if (args.find((e) => e === "get")) {
    green("About to start getting Projects");
    return getProjects();
  }
  if (args.find((e) => e === "post")) {
    green(`About to start posting projects`);
    return postProjects();
  }
  return red(
    `Be sure to either pass ${orange("get")} or ${orange("post")} args`,
  );
}

main().catch((err) => {
  //   console.log("err:", err.message);
  console.error(fmt.red(err.message));
  Deno.exit(1);
});
