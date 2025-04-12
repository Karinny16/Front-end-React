import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(
    'bd_xk_api',
    'root',
    'etecembu@123',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

export { sequelize };