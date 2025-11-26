import fs from "fs";

export interface God {
  id: string;
  name: string;
  domains: string;
}

export const GODS: Array<God> = JSON.parse(fs.readFileSync("data/gods.json", "utf-8"));

export function gods() {
  return GODS;
}

export function god(_parent: unknown, { id }: Record<"id", string>) {
  return GODS
    .find((god) => god.id === id);
}
