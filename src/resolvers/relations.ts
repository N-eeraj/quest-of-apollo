import fs from "fs";
import {
  type Hero,
} from "./heroes.ts";
import {
  type God,
} from "./gods.ts";

export interface Relation {
  heroId: string
  godId: string
  relation: string;
}

export const RELATIONS: Array<Relation> = JSON.parse(fs.readFileSync("data/relations.json", "utf-8"));

export function getRelationsByHero(heroId: Hero["id"]): Array<Relation> {
  return RELATIONS
    .filter((relation) => relation.heroId === heroId);
}

export function getRelationsByGod(godId: God["id"]): Array<Relation> {
  return RELATIONS
    .filter((relation) => relation.godId === godId);
}
