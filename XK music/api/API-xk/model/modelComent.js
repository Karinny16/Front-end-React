import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Comment = sequelize.define('Comment', {
    nomeMusica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomeCantor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comentario: {
        type: DataTypes.TEXT,
    },
    categoria: {
        type: DataTypes.STRING,
    },
    avaliacao: {
        type: DataTypes.STRING,
    },
    album_cover: {
        type: DataTypes.STRING, // URL do álbum opcional
    },
});

export default Comment;

