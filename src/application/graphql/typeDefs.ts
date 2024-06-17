
export const typeDefs = `
type Episode {
    name: String
    episode: String
}

type Location {
    name: String
    type: String
    dimension: String
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
    character(page:ID, order:ID): [Character]
    characterFilter(page:ID, order:ID, filter:String, char:String): [Character]
}

type Mutation {
    updateCharacter(id:ID, comment:String):Character
}

`