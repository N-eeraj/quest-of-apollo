import fs from "fs";
import {
  QUESTS,
  type Quest,
  deleteQuestsByHero,
} from "./quests.ts";
import {
  getRelationsByHero,
  deleteRelationsByHero,
} from "./relations.ts";
import {
  type God,
} from "./gods.ts";

export interface Hero {
  id: string;
  name: string;
  city: string;
}

export let HEROES: Array<Hero> = JSON.parse(fs.readFileSync("data/heroes.json", "utf-8"));

export function heroes(): Array<Hero> {
  return HEROES;
}

export function hero(
  _parent: unknown,
  { id }: Record<"id", Hero["id"]>,
): Hero | undefined {
  return HEROES
    .find((hero) => hero.id === id);
}

export function questsByHero(hero: Hero): Array<Quest> {
  return QUESTS
    .filter((quest) => quest.heroId === hero.id);
}

export function relationsByHero(hero: Hero): Array<{ relation: string, god: God }> {
  return getRelationsByHero(hero.id);
}

export function deleteHero(
  _parent: unknown,
  { id }: Record<"id", Hero["id"]>,
): Array<Hero> {
  HEROES = HEROES.filter((hero) => hero.id !== id);
  deleteQuestsByHero(undefined, { heroId: id });
  deleteRelationsByHero(undefined, { heroId: id });
  return HEROES;
}
