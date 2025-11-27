import fs from "fs";
import {
  hero,
  type Hero,
} from "./heroes.ts";
import {
  god,
  type God,
} from "./gods.ts";

interface RelationData {
  id: string;
  heroId: string;
  godId: string;
  relation: string;
}

export interface Relation {
  id: string;
  hero: Hero;
  god: God;
  relation: string;
}

export const RELATIONS: Array<RelationData> = JSON.parse(fs.readFileSync("data/relations.json", "utf-8"));

function generateRelation(relation: RelationData): Relation {
  return {
    id: relation.id,
    relation: relation.relation,
    hero: hero(undefined, { id: relation.heroId })!,
    god: god(undefined, { id: relation.godId })!,
  }
}

export function getRelationsByHero(heroId: Hero["id"]): Array<Relation> {
  return RELATIONS
    .reduce((acc: Array<Relation>, relation) => {
      if (relation.heroId === heroId) {
        acc.push(generateRelation(relation));
      }
      return acc;
    }, []);
}

export function getRelationsByGod(godId: God["id"]): Array<Relation> {
  return RELATIONS
    .reduce((acc: Array<Relation>, relation) => {
      if (relation.godId === godId) {
        acc.push(generateRelation(relation));
      }
      return acc;
    }, []);
}

export function relations(): Array<Relation> {
  return RELATIONS
    .map(generateRelation);
}

export function relation(
  _parent: unknown,
  { id }: Record<"id", string>
): Relation | undefined {
  return generateRelation(
    RELATIONS
      .find((relation) => relation.id === id)!
  );
}
