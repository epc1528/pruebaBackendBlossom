import EpisodeModel from '../orm/mysql/models/episode.model'

export class EpisodeRepository  {

  constructor() {
  }

  async saveEpisode(data: any, conditional:any){
    try {
        const saveEpisode = await EpisodeModel.findOrCreate(
            {
                where:conditional,
                defaults: data
            }
        )
        return saveEpisode
    } catch (error) {
        console.log(error)
    }
  }

}