import fs from "fs";
import path from "path";

async function getPath(relativePath: string) {
  return path.join(process.cwd(), relativePath);
}

export async function readDirectory(relativePath: string) {
  const dirPath = await getPath(relativePath);
  return fs.readdirSync(dirPath);
}

export async function readFile(relativePath: string) {
  const filePath = await getPath(relativePath);
  return fs.readFileSync(filePath, "utf-8");
}
