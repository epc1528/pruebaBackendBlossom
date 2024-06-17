import { Op } from 'sequelize';
import { CharacterRepository } from '../../../infrastructure/repositories/character.repository';
import { ICharacterService } from './character.implementation';

export class CharacterService implements ICharacterService {
  constructor(private readonly characterRepository: CharacterRepository) {}

  getCharacter = (arg:{page?:number, order?:number} | null) => {
    let valores = {}
    valores = (arg?.page) ? {...valores, limit: 5, offset: (arg.page-1)*5} : {...valores, limit: 5, offset: 0}
    if (arg?.order) valores = (arg.order == 0) ? {...valores, order: [['name', 'ASC']]} : {...valores, order: [['name', 'DESC']]}
    return this.characterRepository.find(valores);
  };

  getCharacterFilter = (arg:{page?:number, filter?:string, char?:string} | null) => {
    let valores = {}
    const key = (arg?.filter) ? arg?.filter : 'name'
    valores = (arg?.page) ? {...valores, limit: 5, offset: (arg.page-1)*5} : {...valores, limit: 5, offset: 0}
    valores = {...valores,  ...{where: {[key]: {[Op.like]: `%${arg?.char}%`}}}}
    return this.characterRepository.find(valores);
  };

  updateCharacter = (filter:number, item:Object) => {
    return this.characterRepository.update(filter, item)
  };

}