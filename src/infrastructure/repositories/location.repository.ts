import LocationModel from '../orm/mysql/models/location.model'

export class LocationRepository  {

  constructor() {
  }

  async saveLocation(data: any, conditional:any){
    try {
        const saveLocation = await LocationModel.findOrCreate(
            {
                where:conditional,
                defaults: data
            }
        )
        return saveLocation
    } catch (error) {
        console.log(error)
    }
  }

}