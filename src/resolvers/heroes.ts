import fs from "fs";
import {
  QUESTS,
  type Quest,
} from "./quests.ts";
import {
  getRelationsByHero,
} from "./relations.ts";
import {
  god,
  type God,
} from "./gods.ts";

export interface Hero {
  id: string;
  name: string;
  city: string;
}

export const HEROES: Array<Hero> = JSON.parse(fs.readFileSync("data/heroes.json", "utf-8"));

export function heroes(): Array<Hero> {
  return HEROES;
}

export function hero(
  _parent: unknown,
  { id }: Record<"id", string>
): Hero | undefined {
  return HEROES
    .find((hero) => hero.id === id);
}

export function questsByHero(hero: Hero): Array<Quest> {
  return QUESTS
    .filter((quest) => quest.heroId === hero.id);
}

export function relationsByHero(hero: Hero): Array<{ relation: string, god: God }> {
  return getRelationsByHero(hero.id)
}
