import {
  heroes,
  hero,
  questsByHero,
  relationsByHero,
  addHero,
  deleteHero,
} from "./heroes.ts";
import {
  quests,
  quest,
  heroByQuest,
  addQuest,
  deleteQuest,
  deleteQuestsByHero,
} from "./quests.ts";
import {
  gods,
  god,
  relationsByGod,
  addGod,
  deleteGod,
} from "./gods.ts";
import {
  relations,
  relation,
  addRelation,
  deleteRelation,
  deleteRelationsByHero,
  deleteRelationsByGod,
} from "./relations.ts"

export default {
  Query: {
    heroes,
    hero,
    quests,
    quest,
    gods,
    god,
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
    addHero,
    addQuest,
    addGod,
    addRelation,
    deleteHero,
    deleteQuest,
    deleteGod,
    deleteRelation,
    deleteQuestsByHero,
    deleteRelationsByHero,
    deleteRelationsByGod,
  }
};
