import express from 'express';
const urheilijatRouter = express.Router();
import { Urheilija } from '../models/urheilija.js';

// Osoite: /api/urheilijat

// Get metodi, haetana kaikki urheilijat
urheilijatRouter.get('/', async (req, res) => {
  const urheilijat = await Urheilija.findAll();
  return res.status(200).json({ message: 'Urheilijat haettu onnistuneesti', data: urheilijat });
});

// Get metodi, haetaan urheilija id:n perusteella
urheilijatRouter.get('/:id', async (req, res) => {
  const urheilija = await Urheilija.findByPk(req.params.id);
  if (urheilija) {
    return res.status(200).json({ message: 'Urheilija haettu onnistuneesti', data: urheilija });
  } else {
    return res.status(404).json({ message: 'Urheilijaa ei löytynyt' });
  }
});

// Post metodi, lisätään uusi urheilija
urheilijatRouter.post('/', async (req, res) => {
  const { etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, linkkiKuvaan, laji, saavutukset } = req.body;
  const urheilija = await Urheilija.create({
    etunimi: etunimi,
    sukunimi: sukunimi,
    kutsumanimi: kutsumanimi,
    syntymavuosi: syntymavuosi,
    paino: paino,
    linkkiKuvaan: linkkiKuvaan,
    laji: laji,
    saavutukset: saavutukset
  });
  return res.status(201).json({ message: 'Urheilija lisätty onnistuneesti', data: urheilija });
});

// Put metodi, päivitetään urheilijan tiedot
urheilijatRouter.put('/:id', async (req, res) => {
  const { etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, linkkiKuvaan, laji, saavutukset } = req.body;
  const urheilija = await Urheilija.findByPk(req.params.id);
  if (urheilija) {
    urheilija.etunimi = etunimi;
    urheilija.sukunimi = sukunimi;
    urheilija.kutsumanimi = kutsumanimi;
    urheilija.syntymavuosi = syntymavuosi;
    urheilija.paino = paino;
    urheilija.linkkiKuvaan = linkkiKuvaan;
    urheilija.laji = laji;
    urheilija.saavutukset = saavutukset;
    await urheilija.save();
    return res.status(200).json({ message: 'Urheilijan tiedot päivitetty onnistuneesti', data: urheilija });
  } else {
    return res.status(404).json({ message: 'Urheilijaa ei löytynyt' });
  }
});

// Delete metodi, poistetaan urheilija id:n perusteella
urheilijatRouter.delete('/:id', async (req, res) => {
  const urheilija = await Urheilija.findByPk(req.params.id);
  if (urheilija) {
    await urheilija.destroy();
    return res.status(200).json({ message: 'Urheilija poistettu onnistuneesti' });
  } else {
    return res.status(404).json({ message: 'Urheilijaa ei löytynyt' });
  }
});

export { urheilijatRouter };