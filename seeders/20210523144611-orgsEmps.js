'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            "orgsEmps",
            [
                {
                    org_id: 1,
                    emp_id: 2,
                }, {
                    org_id: 2,
                    emp_id: 3,
                },{
                    org_id: 2,
                    emp_id: 5,
                },{
                    org_id: 2,
                    emp_id: 1,
                },{
                    org_id: 1,
                    emp_id: 4,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('orgsEmps', null, {});
    }
};
