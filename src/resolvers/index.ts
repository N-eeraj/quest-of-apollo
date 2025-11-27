import {
  heroes,
  hero,
  questsByHero,
  relationsByHero,
} from "./heroes.ts";
import {
  gods,
  god,
  relationsByGod,
} from "./gods.ts";
import {
  quests,
  quest,
  heroByQuest,
} from "./quests.ts";
import {
  relations,
  relation,
} from "./relations.ts"

export default {
  Query: {
    heroes,
    hero,
    gods,
    god,
    quests,
    quest,
    relations,
    relation,
  },
  Hero: {
    quests: questsByHero,
    relations: relationsByHero,
  },
  Quest: {
    hero: heroByQuest,
  },
  God: {
    relations: relationsByGod,
  },
};
