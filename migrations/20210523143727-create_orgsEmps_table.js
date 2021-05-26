'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("orgsEmps", {
            org_id: {
                type: Sequelize.INTEGER,

            },
            emp_id: {
                type: Sequelize.INTEGER,

            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('orgsEmps');
    }
};
