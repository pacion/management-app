'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("salaries", {
            emp_id: {
                type: Sequelize.INTEGER,
            },
            salary: {
                type: Sequelize.INTEGER
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('salaries');
    }
};
