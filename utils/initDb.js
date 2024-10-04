import { sequelize } from "./dbConfig.js";
import { Urheilija } from "../models/urheilija.js";

const initDb = async () => {
  try {
    await sequelize.sync({ force: true });
    //await Urheilija.sync({force: true});
    console.log('Tietokantataulut luotu');
  } catch (error) {
    console.error('Tietokantataulujen luonti epäonnistui', error);
  }
};

export { initDb };