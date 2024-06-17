require('dotenv').config()
export const port = +(process.env.PORT ?? '9000');

export const mysql = {
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: process.env.MYSQL_PORT ?? '3306',
    user: process.env.MYSQL_USER ?? 'admin',
    pass: process.env.MYSQL_PASS ?? '',
    database: process.env.MYSQL_DATABASE ?? ''
};