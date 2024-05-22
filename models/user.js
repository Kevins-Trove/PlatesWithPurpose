const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 3
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6],
                    msg: 'Password must be at least 6 characters long'
                },
            },
        },
        isReceiver: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        },
        isGiver: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        },
        isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                // User Type 
                newUserData.isAdmin = newUserData.type == 1 ? true : false;
                newUserData.isReceiver = newUserData.type == 2 ? true : false;
                newUserData.isGiver = newUserData.type == 3 ? true : false;

                // Encrypt Password
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                // User Type 
               // User Type 
               newUserData.isAdmin = newUserData.type == 1 ? true : false;
               newUserData.isReceiver = newUserData.type == 2 ? true : false;
               newUserData.isGiver = newUserData.type == 3 ? true : false;

                // Encrypt Password
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;