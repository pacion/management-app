'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            "salaries",
            [
                {
                    emp_id: 1,
                    salary: 12000
                }, {
                    emp_id: 2,
                    salary: 2100
                }, {
                    emp_id: 3,
                    salary: 2000
                }, {
                    emp_id: 4,
                    salary: 800
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('salaries', null, {});
    }
};
