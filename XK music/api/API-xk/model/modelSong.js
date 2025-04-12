import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
const Song = sequelize.define('Song', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    album_cover: {
        type: DataTypes.STRING, // URL da imagem do álbum
    },
    genre: {
        type: DataTypes.STRING,
    },
    release_year: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Song;
