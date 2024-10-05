import { Urheilija } from "../models/urheilija.js";

const addUrheilija = async () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');

  await Urheilija.create(
    {
      etunimi: 'Matti',
      sukunimi: 'Meikäläinen',
      kutsumanimi: 'Masa',
      syntymavuosi: formattedDate,
      paino: 55,
      linkkiKuvaan: 'https://www.google.com',
      laji: 'Jalkapallo',
      saavutukset:  'MM 2020 voitto'
    });
};

export { addUrheilija };