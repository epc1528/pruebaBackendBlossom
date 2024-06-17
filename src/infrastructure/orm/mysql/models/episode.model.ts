import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../mysql';

interface EpisodeAttributes {
    id:number;
    name:string;
    air_date:string;
    episode:string;
}

interface EpisodeCreateAttributes extends Optional<EpisodeAttributes, "id"> {}


class EpisodeModel extends Model<EpisodeAttributes, EpisodeCreateAttributes> implements EpisodeAttributes{
    public id!:number;
    public name!:string;
    public air_date!:string;
    public episode!:string;
}

EpisodeModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
    
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          air_date: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          episode: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        tableName: 'episode',
        sequelize,
        paranoid: true,
        timestamps:true
    }
)

export default EpisodeModel