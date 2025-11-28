import {
  heroes,
  hero,
  questsByHero,
  relationsByHero,
  deleteHero,
} from "./heroes.ts";
import {
  gods,
  god,
  relationsByGod,
  deleteGod,
} from "./gods.ts";
import {
  quests,
  quest,
  heroByQuest,
  deleteQuest,
  deleteQuestsByHero,
} from "./quests.ts";
import {
  relations,
  relation,
  deleteRelation,
  deleteRelationsByHero,
  deleteRelationsByGod,
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
  Mutation: {
    deleteHero,
    deleteGod,
    deleteQuest,
    deleteRelation,
    deleteQuestsByHero,
    deleteRelationsByHero,
    deleteRelationsByGod,
  }
};
