const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5,
            },
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season: {
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [['verano', 'otoño', 'invierno', 'primeravera']],
                    msg: 'Escoja una estación válida'
                }
            },
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: Sequelize.NOW,
        },
    }, {
        tableName: 'activities',
        timestamps: false,
    }
    );
};

