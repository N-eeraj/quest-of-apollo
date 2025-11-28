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

export let RELATIONS: Array<RelationData> = JSON.parse(fs.readFileSync("data/relations.json", "utf-8"));

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
  { id }: Record<"id", Relation["id"]>
): Relation | undefined {
  return generateRelation(
    RELATIONS
      .find((relation) => relation.id === id)!
  );
}

export function deleteRelation(
  _parent: unknown,
  { id }: Record<"id", Relation["id"]>
): Array<Relation> {
  RELATIONS = RELATIONS.filter((relation) => relation.id !== id);
  return RELATIONS
    .map(generateRelation);
}

export function deleteRelationsByHero(
  _parent: unknown,
  { heroId }: Record<"heroId", Hero["id"]>
): Array<Relation> {
  RELATIONS = RELATIONS.filter((quest) => quest.heroId !== heroId);
  return RELATIONS
    .map(generateRelation);
}

export function deleteRelationsByGod(
  _parent: unknown,
  { godId }: Record<"godId", God["id"]>
): Array<Relation> {
  RELATIONS = RELATIONS.filter((quest) => quest.godId !== godId);
  return RELATIONS
    .map(generateRelation);
}
