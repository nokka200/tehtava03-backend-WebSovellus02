import { sequelize } from "./dbConfig.js";
import { Urheilija } from "../models/urheilija.js";
import { addUrheilija } from "./dbHelper.js";

const initDb = async () => {
  try {
    // Alustetaan tietokanta ja luodaan sinne yksi urheilija
    await sequelize.sync({ force: true });
    //await Urheilija.sync({force: true});
    await addUrheilija();
    console.log('Tietokantataulut luotu');
  } catch (error) {
    console.error('Tietokantataulujen luonti epäonnistui', error);
  }
};

export { initDb };