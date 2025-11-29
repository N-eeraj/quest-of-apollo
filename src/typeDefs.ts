const RootQuery = `#graphql
  type GodRelation {
    god: God!
    relation: String!
  }

  type HeroRelation {
    hero: Hero!
    relation: String!
  }

  type Hero {
    id: ID!
    name: String!
    city: String!
    quests: [Quest!]
    relations: [GodRelation!]
  }

  type Quest {
    id: ID!
    title: String!
    status: String!
    hero: Hero!
  }

  type God {
    id: ID!
    name: String!
    domains: [String!]!
    relations: [HeroRelation!]
  }

  type Relation {
    id: ID!
    god: God!
    hero: Hero!
    relation: String!
  }

  type Query {
    heroes: [Hero]
    hero(id: ID!): Hero
    quests: [Quest]
    quest(id: ID!): Quest
    gods: [God]
    god(id: ID!): God
    relations: [Relation]
    relation(id: ID!): Relation
  }

  type Mutation {
    addHero(name: String!, city: String!): Hero
    addQuest(title: String!, status: String!, heroId: ID!): Quest
    addGod(name: String!, domains: [String!]!): God
    addRelation(heroId: ID!, godId: ID!, relation: String!): Relation
    updateHero(id: ID!, name: String, city: String): Hero
    updateQuest(id: ID!, title: String, status: String, heroId: ID): Quest
    updateGod(id: ID!, name: String, domains: [String!]): God
    updateRelation(id: ID!, heroId: ID, godId: ID, relation: String): Relation
    deleteHero(id: ID!): [Hero]
    deleteGod(id: ID!): [God]
    deleteQuest(id: ID!): [Quest]
    deleteRelation(id: ID!): [Relation]
    deleteQuestsByHero(heroId: ID!): [Quest]
    deleteRelationsByHero(heroId: ID!): [Relation]
    deleteRelationsByGod(godId: ID!): [Relation]
  }
`;

export default RootQuery;
