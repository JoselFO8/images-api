const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('image', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};