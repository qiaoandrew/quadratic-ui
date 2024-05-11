import fs from "fs";
import path from "path";
import { formatDocMenuLabel } from "./helper";

const getPath = async (relativePath: string) =>
  path.join(process.cwd(), relativePath);

const readDirectory = async (relativePath: string) => {
  const dirPath = await getPath(relativePath);
  return fs.readdirSync(dirPath);
};

// const readFile = async (relativePath: string) => {
//   const filePath = await getPath(relativePath);
//   return fs.readFileSync(filePath, "utf-8");
// };

export const getPrimitivesMenu = async () => {
  const primitives = await readDirectory("src/app/docs/primitives");
  const primitivesMenu = await Promise.all(
    primitives.map(async (primitive) => {
      return {
        id: primitive,
        href: `/docs/primitives/${primitive}`,
        label: formatDocMenuLabel(primitive),
      };
    }),
  );
  return primitivesMenu;
};
