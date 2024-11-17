const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Usuario = require("./usuario");

const Transferencia = sequelize.define('Transferencia', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    emisor: {
        type: DataTypes.INTEGER,
    },
    receptor: {
        type: DataTypes.INTEGER,
    },
    monto: {
        type: DataTypes.FLOAT
    },
    fecha: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'transferencias',
    timestamps: false
});

Transferencia.belongsTo(Usuario, {
    foreignKey: {
        name: 'receptor'
    },
    as: 'receptor_alias'
});
Transferencia.belongsTo(Usuario, {
    foreignKey: {
        name: 'emisor'
    },
    as: 'emisor_alias'
});


module.exports = Transferencia;