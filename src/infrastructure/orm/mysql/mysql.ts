import { Sequelize } from "sequelize";
import { mysql } from "../../../application/config/environment";

const sequelize = new Sequelize({
    dialect:'mysql',
    host: mysql.host,
    port: Number(mysql.port),
    username: mysql.user,
    password: mysql.pass,
    database: mysql.database,
    logging: false,
    dialectOptions:{
        
    }
})

export default sequelize;