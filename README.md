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
---

## **✅ Mutations**

### **Hero Mutations**
- [ ] `addHero(name: String!, city: String!): Hero`
- [ ] `updateHero(id: ID!, name: String, city: String): Hero`
- [ ] `deleteHero(id: ID!): Boolean`

### **Quest Mutations**
- [ ] `addQuest(title: String!, status: String!, heroId: ID!): Quest`
- [ ] `updateQuest(id: ID!, title: String, status: String): Quest`
- [ ] `deleteQuest(id: ID!): Boolean`

### **God Mutations**
- [ ] `addGod(name: String!, domains: [String!]!): God`
- [ ] `updateGod(id: ID!, name: String, domains: [String!]): God`
- [ ] `deleteGod(id: ID!): Boolean`

### **Hero-God Relation Mutations**
- [ ] `addHeroGodRelation(heroId: ID!, godId: ID!, relation: String!): HeroGodRelation`
- [ ] `updateHeroGodRelation(id: ID!, relation: String!): HeroGodRelation`
- [ ] `deleteHeroGodRelation(id: ID!): Boolean`
