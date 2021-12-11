'use strict'
const {
   Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }

      toJSON() {
         return {
            ...this.get(),
            password: undefined
         }

      }
   };
   User.init({
      firstName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      },
      guard: {
         type: DataTypes.STRING,
         defaultValue: 'users'
      }
   }, {
      sequelize,
      tableName: 'users',
      modelName: 'User',
   })
   return User
}