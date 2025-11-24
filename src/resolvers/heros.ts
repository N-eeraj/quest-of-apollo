import fs from "fs";

export interface Hero {
  id: string;
  name: string;
  city: string;
}

export const HEROS: Array<Hero> = JSON.parse(fs.readFileSync("data/heros.json", "utf-8"));

export function heros() {
  return HEROS;
}
