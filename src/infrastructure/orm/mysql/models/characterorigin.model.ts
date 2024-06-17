import CharacterModel from "./character.model";
import LocationModel from "./location.model";
import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../mysql';

interface CharacterLocationAttributes {
    id:number;
    characterId:number;
    originId:number;
}

interface CharacterLocationCreateAttributes extends Optional<CharacterLocationAttributes, "id"> {}

class CharacterOriginModel extends Model<CharacterLocationAttributes, CharacterLocationCreateAttributes> implements CharacterLocationAttributes{
    public id!:number;
    public characterId!:number;
    public originId!:number;
}



CharacterOriginModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
    
          originId: {
            type: DataTypes.INTEGER,
            references:{
                model: LocationModel,
                key: 'id'
            }
          },
    },
    {
        tableName: 'characterorigin',
        sequelize,
        paranoid: true,
        timestamps:true
    }
)

CharacterModel.belongsToMany(LocationModel, { through: CharacterOriginModel })
LocationModel.belongsToMany(CharacterModel, { through: CharacterOriginModel })

export default CharacterOriginModel