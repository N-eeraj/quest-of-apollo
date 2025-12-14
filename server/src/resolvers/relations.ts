import fs from "fs";
import {
  hero,
  findHero,
  type Hero,
} from "./heroes.ts";
import {
  god,
  findGod,
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
let latestRelationId = Math.max(
  ...RELATIONS.map((relation) => Number(relation.id))
);

function generateRelation(relation: RelationData): Relation {
  return {
    id: relation.id,
    relation: relation.relation,
    hero: hero(undefined, { id: relation.heroId })!,
    god: god(undefined, { id: relation.godId })!,
  };
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

export function addRelation(
  _parent: unknown,
  { heroId, godId, relation }: Pick<RelationData, "heroId" | "godId" | "relation">
): Relation {
  validateHeroId(heroId);
  validateGodId(godId);

  // validate existing relation
  const existingRelation = RELATIONS
    .some((relation) => (
      relation.heroId === heroId
        && relation.godId === godId
    ));
  if (existingRelation) {
    throw new Error("Relation for this hero-god exists");
  }

  const newRelation = {
    id: String(++latestRelationId),
    heroId,
    godId,
    relation
  } satisfies RelationData;
  RELATIONS.push(newRelation);
  return generateRelation(newRelation);
}

export function updateRelation(
  _parent: unknown,
  { id, heroId, godId, relation: _relation }: Pick<Relation, "id"> & Partial<Pick<RelationData, "heroId" | "godId" | "relation">>,
): Relation {
  // validate id
  let relation = RELATIONS
    .find((relation) => relation.id === id);
  if (!relation) {
    throw new Error("Relation Not Found");
  }
  // validate heroId
  if (heroId) {
    validateHeroId(heroId);
  }
  // validate gofId
  if (godId) {
    validateGodId(godId);
  }

  if (heroId) {
    relation.heroId = heroId;
  }
  if (godId) {
    relation.godId = godId;
  }
  if (_relation) {
    relation.relation = _relation;
  }

  return generateRelation(relation);
}

export function validateHeroId(heroId: RelationData["heroId"]) {
  const hero = findHero(heroId);
  if (!hero) {
    throw new Error("Hero Not Found");
  }
}

export function validateGodId(godId: RelationData["godId"]) {
  const god = findGod(godId);
  if (!god) {
    throw new Error("God Not Found");
  }
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
