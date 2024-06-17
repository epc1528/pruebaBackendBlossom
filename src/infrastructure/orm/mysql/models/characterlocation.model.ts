import CharacterModel from "./character.model";
import LocationModel from "./location.model";
import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../mysql';

interface CharacterLocationAttributes {
    id:number;
    characterId:number;
    locationId:number;
}

interface CharacterLocationCreateAttributes extends Optional<CharacterLocationAttributes, "id"> {}

class CharacterLocationModel extends Model<CharacterLocationAttributes, CharacterLocationCreateAttributes> implements CharacterLocationAttributes{
    public id!:number;
    public characterId!:number
    public locationId!:number
}



CharacterLocationModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },

        characterId: {
            type: DataTypes.INTEGER,
            references:{
                model: CharacterModel,
                key: 'id'
            }
          },
    
          locationId: {
            type: DataTypes.INTEGER,
            references:{
                model: LocationModel,
                key: 'id'
            }
          },
    },
    {
        tableName: 'characterlocation',
        sequelize,
        paranoid: true,
        timestamps:true
    }
)

CharacterModel.belongsToMany(LocationModel, { through: CharacterLocationModel })
LocationModel.belongsToMany(CharacterModel, { through: CharacterLocationModel })

export default CharacterLocationModel