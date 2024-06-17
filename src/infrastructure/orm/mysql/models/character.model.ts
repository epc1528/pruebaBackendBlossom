import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../mysql';
interface CharacterAttributes {
    id:number;
    name:string;
    status:string;
    species:string;
    type: string;
    gender:string;
    comment:string;
    image:string;
}

interface CharacterCreateAttributes extends Optional<CharacterAttributes, "id"> {}


class CharacterModel extends Model<CharacterAttributes, CharacterCreateAttributes> implements CharacterAttributes{
    public id!:number;
    public name!:string;
    public status!:string;
    public species!:string;
    public type!: string;
    public gender!:string;
    public comment!:string;
    public image!:string;
}



CharacterModel.init(
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
    
          status: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          species: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
          type: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          gender: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          comment: {
            type: DataTypes.STRING,
            allowNull: true
          },
    
          image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        tableName: 'character',
        sequelize,
        paranoid: true,
        timestamps:true
    }
)

export default CharacterModel