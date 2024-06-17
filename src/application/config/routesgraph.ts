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
                    const getCharacter = await character.getCharacter(arg);
                    return getCharacter
                },
        
                characterFilter: async (__, arg) => {
                    const getCharacter = await character.getCharacterFilter(arg);
                    return getCharacter
                }
        
        
            },
            
            Mutation: {
                updateCharacter: async (__, arg) => {
                    const item = {comment : arg.comment}
                    const updateCharacter = await character.updateCharacter(arg.id, item)
                    return updateCharacter
                }
            }
        }
    });

    await grahp.start()
    app.use('/graphql', expressMiddleware(grahp))
};