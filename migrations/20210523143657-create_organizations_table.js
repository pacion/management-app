'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("organizations", {
            org_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
            },
            location: {
                type: Sequelize.STRING,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('organizations');
    }
};
