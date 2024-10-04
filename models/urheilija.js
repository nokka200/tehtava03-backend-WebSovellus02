import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/dbConfig.js';

class Urheilija extends Model { }

Urheilija.init(
  {
    etunimi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sukunimi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kutsumanimi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    syntymavuosi: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paino: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    linkkiKuvaan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    laji: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saavutukset: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Urheilija',
    freezeTableName: true,
    timestamps: false
  }
);

export { Urheilija };