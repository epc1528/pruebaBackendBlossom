
  
export class GetRick {
    constructor( ){
        
    }

    getCharacter = (page:number) => {
        return fetch("https://rickandmortyapi.com/graphql", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ query: `{characters(page: ${page}) {info {count pages} results { id name status species type gender image origin {id}  location {id}  episode{id}}}}` }),
        }).then(r => r.json())
        .then(data => data)
    }

    getLocation = (page:number) => {
        return fetch("https://rickandmortyapi.com/graphql", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ query: `{locations (page: ${page}){
                info {
                  count
                  pages
                }
                results {
                  id
                  name
                  type
                  dimension
                }
              }}` }),
        }).then(r => r.json())
        .then(data => data)
    }

    getEpisode = (page:number) => {
        return fetch("https://rickandmortyapi.com/graphql", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ query: `{episodes(page: ${page}) {
                info {
                  count
                  pages
                }
                results{
                  id
                  episode
                  name
                  air_date
                }
              }}` }),
        }).then(r => r.json())
        .then(data => data)
    }
}
