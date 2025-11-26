import fs from "fs";
import {
  HEROES,
  type Hero,
} from "./heroes.ts";

export interface Quest {
  id: string;
  title: string;
  status: "COMPLETED" | "IN_PROGRESS" | "PLANNED";
  heroId: Hero["id"];
}

export const QUESTS: Array<Quest> = JSON.parse(fs.readFileSync("data/quests.json", "utf-8"));

export function quests(): Array<Quest> {
  return QUESTS;
}

export function quest(
  _parent: unknown,
  { id }: Record<"id", string>
): Quest | undefined {
  return QUESTS
    .find((quest) => quest.id === id);
}

export function heroByQuest(quest: Quest): Hero {
  return HEROES
    .find((hero) => hero.id === quest.heroId)!;
}
