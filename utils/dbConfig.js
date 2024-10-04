import { Sequelize } from "sequelize";

// Tietokannana käyttäjän tiedot
const dialect = 'mariadb';
const host = 'localhost';
const database = 'urheilijat';
const username = 'root';
const password = '123456';

const sequelizeConfiguration = {
  dialect: dialect,
  host: host,
  database: database,
  username: username,
  password: password,
}

const sequelize = new Sequelize(sequelizeConfiguration);

export { sequelize };