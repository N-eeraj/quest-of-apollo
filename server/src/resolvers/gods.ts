import fs from "fs";
import {
  type Hero,
} from "./heroes.ts";
import {
  getRelationsByGod,
  deleteRelationsByGod,
} from "./relations.ts";

export interface God {
  id: string;
  name: string;
  domains: Array<string>;
}

export let GODS: Array<God> = JSON.parse(fs.readFileSync("data/gods.json", "utf-8"));
let latestGodId = Math.max(
  ...GODS.map((god) => Number(god.id))
);

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

export function addGod(
  _parent: unknown,
  { name, domains }: Pick<God, "name" | "domains">,
): God {
  const newGod = {
    id: String(++latestGodId),
    name,
    domains,
  } satisfies God;
  GODS.push(newGod);
  return newGod;
}

export function updateGod(
  _parent: unknown,
  { id, name, domains }: Pick<God, "id"> & Partial<Pick<God, "name" | "domains">>,
): God {
  let god = findGod(id);
  // validate id
  if (!god) {
    throw new Error("God Not Found");
  }

  if (name) {
    god.name = name;
  }
  if (domains) {
    god.domains = domains;
  }

  return god;
}

export function deleteGod(
  _parent: unknown,
  { id }: Record<"id", God["id"]>
): Array<God> {
  GODS = GODS.filter((god) => god.id !== id);
  deleteRelationsByGod(undefined, { godId: id });
  return GODS;
}

export function findGod(id: God["id"]): God | undefined {
  return GODS
    .find((god) => god.id === id);
}
