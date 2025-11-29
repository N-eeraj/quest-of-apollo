# Quest of Apollo

A Greek mythology-themed GraphQL API built with **Apollo Server** and **JSON file storage**.
Practice **queries, mutations, and nested relationships** between heroes, quests, and gods.

---

## **Project Concept**

This project simulates a mythological world with:

- **Heroes** – Legendary figures like Hercules, Perseus, Orpheus.
- **Quests** – Adventures undertaken by heroes.
- **Gods** – Olympian deities like Zeus, Athena, Apollo.
- **Hero-God Relations** – Many-to-many relationships linking heroes to their patrons, protectors, or guides.

Data is stored in simple **JSON files**, making it easy to experiment without a database.

---

## **JSON Data Files**

| File | Description |
|------|-------------|
| `heroes.json` | List of heroes with IDs and cities |
| `quests.json` | List of quests linked to heroes |
| `gods.json` | List of gods with their domains |
| `heroGodRelations.json` | Many-to-many relation between heroes and gods |

---

## **✅ Queries**

### **Hero-focused Queries**
- [x] `heroes`: Get all heroes
- [x] `hero(id: ID!)`: Get a single hero by ID

### **Quest-focused Queries**
- [x] `quests`: Get all quests
- [x] `quest(id: ID!)`: Get a single quest

### **God-focused Queries**
- [x] `gods`: Get all gods
- [x] `god(id: ID!)`: Get a single god

### **Relation-focused Queries**
- [x] `relations`: Get all relations
- [x] `relation(id: ID!)`: Get a single relation
---

## **✅ Mutations**

### **Hero Mutations**
- [x] `addHero(name: String!, city: String!): Hero`
- [x] `updateHero(id: ID!, name: String, city: String): Hero`
- [x] `deleteHero(id: ID!): [Hero]`

### **Quest Mutations**
- [x] `addQuest(title: String!, status: String!, heroId: ID!): Quest`
- [x] `updateQuest(id: ID!, title: String, status: String, heroId: ID): Quest`
- [x] `deleteQuest(id: ID!): Boolean`
- [x] `deleteQuestsByHero(heroId: ID!): [Quest]`

### **God Mutations**
- [x] `addGod(name: String!, domains: [String!]!): God`
- [x] `updateGod(id: ID!, name: String, domains: [String!]): God`
- [x] `deleteGod(id: ID!): [God]`

### **Hero-God Relation Mutations**
- [x] `addRelation(heroId: ID!, godId: ID!, relation: String!): Relation`
- [x] `updateRelation(id: ID!, heroId: ID, godId: ID, relation: String): Relation`
- [x] `deleteRelation(id: ID!): [Relation]`
- [x] `deleteRelationsByHero(heroId: ID!): [Relation]`
- [x] `deleteRelationsByGod(godId: ID!): [Relation]`
