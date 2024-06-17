import { Application, Request, Response } from 'express';
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServer } from '@apollo/server';
import { characterController } from '../factories';
const character = new characterController;
import { typeDefs } from '../graphql/typeDefs';

export default async (app: Application): Promise<any> => {


    const grahp = new ApolloServer({
        typeDefs,
        resolvers :{
            Query: {
                character: async (__, arg) => {
                    const getCharacter: any = await character.getCharacter(arg);
                    const data = {count: getCharacter[1], character: getCharacter[0]}
                    return data
                },
        
                characterFilter: async (__, arg) => {
                    const getCharacter:any = await character.getCharacterFilter(arg);
                    const data = {count: getCharacter[0], Character: getCharacter[1]}
                    return data
                },

                characters: async (__, arg) => {
                    const getCharacter:any = await character.getCharacterUnique(arg);
                    return getCharacter
                }
        
        
            },
            
            Mutation: {
                updateCharacter: async (__, arg) => {
                    const item = {comment : arg.comment}
                    const updateCharacter = await character.updateCharacter(arg.id, item)
                    return updateCharacter
                }
            },

            Character: {
                location : async(parent) => {
                    const updateCharacter = await character.getLocation(parent.id)
                    return updateCharacter
                },

                episode : async(parent) => {
                    const updateCharacter = await character.getEpisode(parent.id)
                    return updateCharacter
                },

                origin: async(paren) => {
                    const updateCharacter = await character.getOrigin(paren.id)
                    return updateCharacter
                }
            }
        }
    });

    await grahp.start()
    app.use('/graphql', expressMiddleware(grahp))
};