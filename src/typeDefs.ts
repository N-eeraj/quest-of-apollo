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

  type God {
    id: ID!
    name: String!
    domains: [String!]!
    relations: [HeroRelation!]
  }

  type Quest {
    id: ID!
    title: String!
    status: String!
    hero: Hero!
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
    gods: [God]
    god(id: ID!): God
    quests: [Quest]
    quest(id: ID!): Quest
    relations: [Relation]
    relation(id: ID!): Relation
  }

  type Mutation {
    deleteHero(id: ID!): [Hero]
    deleteGod(id: ID!): [God]
    deleteQuest(id: ID!): [Quest]
    deleteRelation(id: ID!): [Relation]
  }
`;

export default RootQuery;
