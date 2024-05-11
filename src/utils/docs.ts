import fs from "fs";
import path from "path";
import { formatDocMenuLabel } from "./helper";

const getPath = async (relativePath: string) =>
  path.join(process.cwd(), relativePath);

const readDirectory = async (relativePath: string) => {
  const dirPath = await getPath(relativePath);
  return fs.readdirSync(dirPath);
};

export const getPrimitivesMenuItems = async () => {
  const names = await readDirectory("src/app/docs/primitives");
  const menuItems = await Promise.all(
    names.map(async (name) => {
      return {
        id: name,
        href: `/docs/primitives/${name}`,
        label: formatDocMenuLabel(name),
      };
    }),
  );
  return menuItems;
};

export const readFile = async (relativePath: string) => {
  const filePath = await getPath(relativePath);
  return fs.readFileSync(filePath, "utf-8");
};
