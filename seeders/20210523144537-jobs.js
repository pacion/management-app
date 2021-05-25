'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            "jobs",
            [
                {
                    job_id: 1,
                    title: "Administrator"
                }, {
                    job_id: 2,
                    title: "Security"
                }, {
                    job_id: 3,
                    title: "Waiter"
                }, {
                    job_id: 4,
                    title: "Accountant"
                }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('jobs', null, {});
    }
};
