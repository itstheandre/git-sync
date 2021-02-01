import { ld as _ } from "https://x.nest.land/deno-lodash@1.0.0/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import * as fmt from "https://deno.land/std@0.85.0/fmt/colors.ts";
import { exec } from "https://deno.land/x/exec/mod.ts";

const HOME = Deno.env.get("HOME")!;
export { _, exec, fmt, HOME, path };
