import {
  heroes,
  hero,
  questsByHero,
  relationsByHero,
} from "./heroes.ts";
import {
  gods,
  god,
} from "./gods.ts";
import {
  quests,
  quest,
  heroByQuest,
} from "./quests.ts";

export default {
  Query: {
    heroes,
    hero,
    gods,
    god,
    quests,
    quest,
  },
  Hero: {
    quests: questsByHero,
    relations: relationsByHero,
  },
  Quest: {
    hero: heroByQuest,
  },
};
