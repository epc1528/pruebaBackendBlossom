
export const typeDefs = `
type Episode {
    id:ID
    name: String
    episode: String
}

type Location {
    id:ID
    name: String
    type: String
    dimension: String
}

type Info {
    count:ID
    character:[Character]
}

type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    comment: String
    episode: [Episode]
    location: Location
    origin: Location
    createdAt: String
    updatedAt: String
    deleteAt: String
}

type Query {
    character(page:ID, order:ID): Info
    characterFilter(page:ID, order:ID, filter:String, char:String): Info
    characters(page:ID): Character
}

type Mutation {
    updateCharacter(id:ID, comment:String):Character
}

`