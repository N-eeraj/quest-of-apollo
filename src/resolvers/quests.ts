import fs from "fs";
import {
  HEROS,
  type Hero,
} from "./heros.ts";

interface Quest {
  id: string;
  title: string;
  status: "COMPLETED" | "IN_PROGRESS" | "PLANNED";
  heroId: Hero["id"];
}

export const QUESTS: Array<Quest> = JSON.parse(fs.readFileSync("data/quests.json", "utf-8"));

export function quests() {
  return QUESTS
    .map(({ heroId, ...data }) => {
      return {
        ...data,
        hero: HEROS.find(({ id }) => id === heroId),
      };
    });
}
