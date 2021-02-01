export async function writeJson(filePath: string, obj: any) {
  let contentRaw = "";
  let main = { main: JSON.stringify(obj) };
  try {
    contentRaw = JSON.stringify(main);
  } catch (error) {
    error.message = `${filePath}: ${error.messag}`;
    throw error;
  }
  await Deno.writeFile(
    filePath,
    new TextEncoder().encode(JSON.stringify(obj)),
  );
  return;
}
