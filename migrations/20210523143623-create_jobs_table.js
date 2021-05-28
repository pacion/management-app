'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("jobs", {
            job_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
            });
        },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('jobs');
    }
};
