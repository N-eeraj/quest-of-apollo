import {
  heroes,
  hero,
  questsByHero,
  relationsByHero,
  addHero,
  updateHero,
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
  updateGod,
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
    updateHero,
    updateGod,
    deleteHero,
    deleteQuest,
    deleteGod,
    deleteRelation,
    deleteQuestsByHero,
    deleteRelationsByHero,
    deleteRelationsByGod,
  }
};
