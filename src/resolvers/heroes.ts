import fs from "fs";

export interface Hero {
  id: string;
  name: string;
  city: string;
}

export const HEROES: Array<Hero> = JSON.parse(fs.readFileSync("data/heroes.json", "utf-8"));

export function heroes() {
  return HEROES;
}
