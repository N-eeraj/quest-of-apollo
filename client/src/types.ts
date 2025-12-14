import type { ElementType } from "react";

interface GodRelation {
  id: string;
  god: God;
  relation: string;
};

interface HeroRelation {
  id: string;
  hero: Hero;
  relation: string;
};

export interface Hero {
  id: string;
  name: string;
  city: string;
  quests: Array<Quest>;
  relations: Array<GodRelation>;
};

export enum Status {
  "COMPLETED" = "COMPLETED",
  "IN_PROGRESS" = "IN_PROGRESS",
  "PLANNED" = "PLANNED",
};

export interface Quest {
  id: string;
  title: string;
  status: Status;
  hero: Hero;
};

export interface God {
  id: string;
  name: string;
  domains: Array<string>;
  relations: Array<HeroRelation>;
};

export interface Relation {
  id: string;
  god: God;
  hero: Hero;
  relation: string;
};

export interface StatusDisplay {
  text: string;
  Icon: ElementType;
  color: string;
};
