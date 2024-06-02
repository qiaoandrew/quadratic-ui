import fs from "fs";
import path from "path";

const getPath = async (relativePath: string) =>
  path.join(process.cwd(), relativePath);

export const readDirectory = async (relativePath: string) => {
  const dirPath = await getPath(relativePath);
  return fs.readdirSync(dirPath);
};

export const readFile = async (relativePath: string) => {
  const filePath = await getPath(relativePath);
  return fs.readFileSync(filePath, "utf-8");
};
