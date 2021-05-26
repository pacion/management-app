'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("employees", {
        emp_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: Sequelize.STRING,

        },
        last_name: {
            type: Sequelize.STRING,

        },
        gender: {
            type: Sequelize.ENUM('F', 'M'),

        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true
            },

        },
        password: {
            type: Sequelize.STRING(64),

        },
        phone_number: {
            type: Sequelize.STRING(15),

        },
        hire_date: {
            type: Sequelize.DATEONLY,

        },
        job_id: {
            type: Sequelize.INTEGER
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("employees");
    }
};
