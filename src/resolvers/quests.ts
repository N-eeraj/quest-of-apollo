import fs from "fs";
import {
  type Hero,
  findHero,
} from "./heroes.ts";

export interface Quest {
  id: string;
  title: string;
  status: "COMPLETED" | "IN_PROGRESS" | "PLANNED";
  heroId: Hero["id"];
}

export let QUESTS: Array<Quest> = JSON.parse(fs.readFileSync("data/quests.json", "utf-8"));
let latestQuestId = Math.max(
  ...QUESTS.map((quest) => Number(quest.id))
);

export function quests(): Array<Quest> {
  return QUESTS;
}

export function quest(
  _parent: unknown,
  { id }: Record<"id", Quest["id"]>
): Quest | undefined {
  return QUESTS
    .find((quest) => quest.id === id);
}

export function heroByQuest(quest: Quest): Hero {
  return findHero(quest.heroId)!
}

export function deleteQuest(
  _parent: unknown,
  { id }: Record<"id", Quest["id"]>
): Array<Quest> {
  QUESTS = QUESTS.filter((quest) => quest.id !== id);
  return QUESTS;
}

export function addQuest(
  _parent: unknown,
  { title, status, heroId }: Pick<Quest, "title" | "status" | "heroId">,
): Quest {
  // validate status
  if (![
    "COMPLETED",
    "IN_PROGRESS",
    "PLANNED",
  ].includes(status)) {
    throw new Error("Invalid Status");
  }
  // validate heroId
  const hero = findHero(heroId);
  if (!hero) {
    throw new Error("Hero Not Found");
  }

  const newQuest = {
    id: String(++latestQuestId),
    title,
    status: status as Quest["status"],
    heroId,
  } satisfies Quest;
  QUESTS.push(newQuest);
  return newQuest;
}

export function deleteQuestsByHero(
  _parent: unknown,
  { heroId }: Record<"heroId", Hero["id"]>
): Array<Quest> {
  QUESTS = QUESTS.filter((quest) => quest.heroId !== heroId);
  return QUESTS;
}
