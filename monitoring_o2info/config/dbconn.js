"use strict";

const mysql = require('mysql');
require('dotenv').config({ path: 'o.env'});


const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const dbOption = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    
    multipleStatements: true    // 다중쿼리문 허용
}

const db = mysql.createConnection(dbOption);

const sessionStore = new MySQLStore(dbOption);

db.connect()

module.exports = {
    db,
    sessionStore
}