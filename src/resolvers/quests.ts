import fs from "fs";
import {
  type Hero,
  findHero,
} from "./heroes.ts";

export interface Quest {
  id: string;
  title: string;
  status: typeof STATUS[number];
  heroId: Hero["id"];
}

export let QUESTS: Array<Quest> = JSON.parse(fs.readFileSync("data/quests.json", "utf-8"));
let latestQuestId = Math.max(
  ...QUESTS.map((quest) => Number(quest.id))
);
const STATUS = [
  "COMPLETED",
  "IN_PROGRESS",
  "PLANNED",
] as const;

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

export function addQuest(
  _parent: unknown,
  { title, status, heroId }: Pick<Quest, "title" | "status" | "heroId">,
): Quest {
  // validate status
  if (!STATUS.includes(status)) {
    throw new Error("Invalid Status");
  }
  validateHeroId(heroId);

  const newQuest = {
    id: String(++latestQuestId),
    title,
    status: status as Quest["status"],
    heroId,
  } satisfies Quest;
  QUESTS.push(newQuest);
  return newQuest;
}

export function updateQuest(
  _parent: unknown,
  { id, title, status, heroId }: Pick<Quest, "id"> & Partial<Pick<Quest, "title" | "status" | "heroId">>,
): Quest {
  // validate id
  let quest = QUESTS
    .find((quest) => quest.id === id);
  if (!quest) {
    throw new Error("Quest Not Found");
  }
  // validate status
  if (status) {
    if (!STATUS.includes(status)) {
      throw new Error("Invalid Status");
    }
  }
  // validate heroId
  if (heroId) {
    validateHeroId(heroId);
  }

  if (title) {
    quest.title = title;
  }
  if (status) {
    quest.status = status;
  }
  if (heroId) {
    quest.heroId = heroId;
  }

  return quest;
}

export function validateHeroId(heroId: Quest["heroId"]) {
  const hero = findHero(heroId);
  if (!hero) {
    throw new Error("Hero Not Found");
  }
}

export function deleteQuest(
  _parent: unknown,
  { id }: Record<"id", Quest["id"]>
): Array<Quest> {
  QUESTS = QUESTS.filter((quest) => quest.id !== id);
  return QUESTS;
}

export function deleteQuestsByHero(
  _parent: unknown,
  { heroId }: Record<"heroId", Hero["id"]>
): Array<Quest> {
  QUESTS = QUESTS.filter((quest) => quest.heroId !== heroId);
  return QUESTS;
}
