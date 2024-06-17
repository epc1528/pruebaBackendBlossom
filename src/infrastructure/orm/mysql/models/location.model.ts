import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../mysql';

interface LocationAttributes {
    id:number;
    name:string;
    type: string;
    dimension:string;
}

interface LocationCreateAttributes extends Optional<LocationAttributes, "id"> {}


class LocationModel extends Model<LocationAttributes, LocationCreateAttributes> implements LocationAttributes{
    public id!:number;
    public name!:string;
    public dimension!:string;
    public type!: string;
}



LocationModel.init(
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
    
          type: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          dimension: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        tableName: 'location',
        sequelize,
        paranoid: true,
        timestamps:true
    }
)

export default LocationModel