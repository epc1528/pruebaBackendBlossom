import CharacterModel from '../orm/mysql/models/character.model'
import CharacterOriginModel from '../orm/mysql/models/characterorigin.model';
import CharacterLocationModel from '../orm/mysql/models/characterlocation.model';
import CharacterEpisodeModel from '../orm/mysql/models/characterepisode.model';
import EpisodeModel from '../orm/mysql/models/episode.model';
import LocationModel from '../orm/mysql/models/location.model';

export class CharacterRepository  {

  constructor() {
  }

  async update(filter: number, item: Object) {
    try {
      const value = { where: { id: filter}}
      let character = await CharacterModel.update(item, value)
      return (character[0] > 0) ? await CharacterModel.findByPk(filter) : 0;
    } catch (error) {
      console.log(error)
    }
    
  }

  async find(arg:Object | null) {
    try {
      const character: any = await CharacterModel.findAndCountAll({raw:true, ...arg});
    return [character.rows, character.count];
    } catch (error) {
      console.log(error)
    }
  }

  async findByid(arg:number) {
    try {
      return  await CharacterModel.findByPk(arg, {raw:true});
    } catch (error) {
      console.log(error)
    }
  }

  async saveCharacter(data: any, conditional:any, origin: any, location:any, episode:any){
    try {
        const saveCharacter = await CharacterModel.findOrCreate(
            {
                where:conditional,
                defaults: data
            }
        )
        if(origin.id != null) await this.saveCharacterOrigin(conditional.id, origin.id)
        if(location.id != null) await this.saveCharacterLocation(conditional.id, location.id)
        await this.saveCharacterEpisode(conditional.id, episode)
        return saveCharacter
    } catch (error) {
        console.log(error)
    }
  }

  async saveCharacterOrigin(idCharacter: number, idOrigin:number){
    try {
      return await CharacterOriginModel.findOrCreate({
        where: {
          characterId:idCharacter,
          originId:idOrigin
        },
        defaults: {
          characterId:idCharacter,
          originId:idOrigin
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async saveCharacterLocation(idCharacter:number, idLocation:number){
    try {
      return await CharacterLocationModel.findOrCreate({
        where:{
          characterId:idCharacter,
          locationId:idLocation
        },
        defaults:{
          characterId:idCharacter,
          locationId:idLocation
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async saveCharacterEpisode(idCharacter:number, episode:any){
    try {
      for(let index of episode){
        await CharacterEpisodeModel.findOrCreate({
          where:{
            characterId:idCharacter,
            episodeId:index.id
          },
          defaults:{
            characterId:idCharacter,
            episodeId:index.id
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findByLocation(arg:number) {
    try {
      return  await CharacterModel.findOne({where:{id: arg}, include: LocationModel,raw:true});
    } catch (error) {
      console.log(error)
    }
  }

  async findByOrigin(arg:number) {
    try {
      return  await CharacterModel.findOne({where:{id: arg}, include: LocationModel,raw:true});
    } catch (error) {
      console.log(error)
    }
  }

  async findByEpisode(arg:number) {
    try {
      return  await CharacterModel.findAll({where:{id: arg}, include: EpisodeModel, raw:true});
    } catch (error) {
      console.log(error)
    }
  }
}