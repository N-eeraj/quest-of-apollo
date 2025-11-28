import fs from "fs";
import {
  type Hero,
} from "./heroes.ts";
import {
  getRelationsByGod,
} from "./relations.ts";

export interface God {
  id: string;
  name: string;
  domains: string;
}

export let GODS: Array<God> = JSON.parse(fs.readFileSync("data/gods.json", "utf-8"));

export function gods(): Array<God> {
  return GODS;
}

export function god(
  _parent: unknown,
  { id }: Record<"id", God["id"]>
): God | undefined {
  return GODS
    .find((god) => god.id === id);
}

export function relationsByGod(god: God): Array<{ relation: string, hero: Hero }> {
  return getRelationsByGod(god.id);
}

export function deleteGod(
  _parent: unknown,
  { id }: Record<"id", God["id"]>
): Array<God> {
  GODS = GODS.filter((god) => god.id !== id);
  return GODS;
}
