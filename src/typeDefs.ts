const RootQuery = `#graphql
  type GodRelation {
    god: God!
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
  }

  type Quest {
    id: ID!
    title: String!
    status: String!
    hero: Hero!
  }

  type Query {
    heroes: [Hero]
    hero(id: ID!): Hero
    gods: [God]
    god(id: ID!): God
    quests: [Quest]
    quest(id: ID!): Quest
  }
`;

export default RootQuery;
