import { Op } from 'sequelize';
import { CharacterRepository } from '../../../infrastructure/repositories/character.repository';
import { ICharacterService } from './character.implementation';

export class CharacterService implements ICharacterService {
  constructor(private readonly characterRepository: CharacterRepository) {}

  getCharacter = async (arg:{page?:number, order?:number} | null) => {
    let valores = {}
    valores = (arg?.page) ? {...valores, limit: 20, offset: (arg.page-1)*20} : {...valores, limit: 20, offset: 0}
    if (arg?.order) valores = (arg.order == 0) ? {...valores, order: [['name', 'ASC']]} : {...valores, order: [['name', 'DESC']]}
    return await this.characterRepository.find(valores);
  };

  getCharacterFilter = async (arg:{page?:number, filter?:string, char?:string} | null) => {
    let valores = {}
    const key = (arg?.filter) ? arg?.filter : 'name'
    valores = (arg?.page) ? {...valores, limit: 20, offset: (arg.page-1)*20} : {...valores, limit: 20, offset: 0}
    valores = {...valores,  ...{where: {[key]: {[Op.like]: `%${arg?.char}%`}}}}
    return await this.characterRepository.find(valores);
  };

  updateCharacter = async (filter:number, item:Object) => {
    return await this.characterRepository.update(filter, item)
  };

  getCharacterUnique = async (arg:{page:number} | any) => {
    return await this.characterRepository.findByid(arg.page);
  };

  getCharacterEpisode = async (arg:number) => {
    return await this.characterRepository.findByEpisode(arg);
    
  };

  getCharacterLocation = async (arg:number) => {
    return await this.characterRepository.findByLocation(arg);
    
  };

  getCharacterOrigin = async (arg:number) => {
    return await this.characterRepository.findByOrigin(arg);
    
  };

}