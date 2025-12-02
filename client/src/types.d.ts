interface GodRelation {
  god: God
  relation: string
}

interface HeroRelation {
  hero: Hero
  relation: string
}

export interface Hero {
  id: string
  name: string
  city: string
  quests: Array<Quest>
  relations: Array<GodRelation>
}

export interface Quest {

}

export interface God {
  id: string
  name: string
  domains: Array<String>
  relations: Array<HeroRelation>
}

export interface Relation {
  id: string
  god: God
  hero: Hero
  relation: string
}
