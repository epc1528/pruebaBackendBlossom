import CharacterModel from "./character.model";
import EpisodeModel from "./episode.model";
import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../mysql';

interface CharacterEpisodeAttributes {
    id:number;
    characterId:number;
    episodeId:string;
}

interface CharacterEpisodeAttributesCreateAttributes extends Optional<CharacterEpisodeAttributes, "id"> {}


class CharacterEpisodeModel extends Model<CharacterEpisodeAttributes, CharacterEpisodeAttributesCreateAttributes> implements CharacterEpisodeAttributes{
    public id!: number;
    public characterId!:number;
    public episodeId!:string;
}



CharacterEpisodeModel.init(
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
    
          episodeId: {
            type: DataTypes.STRING,
            references:{
                model: EpisodeModel,
                key: 'id'
            }
          },
    },
    {
        tableName: 'characterepisode',
        sequelize,
        paranoid: true,
        timestamps:true
    }
)

CharacterModel.belongsToMany(EpisodeModel, { through: CharacterEpisodeModel })
EpisodeModel.belongsToMany(CharacterModel, { through: CharacterEpisodeModel })

export default CharacterEpisodeModel