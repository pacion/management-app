'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            "organizations",
            [
                {
                    org_id: 1,
                    name: "KFC",
                    location: "Sopot"
                }, {
                    org_id: 2,
                    name: "Mcdonalds",
                    location: "Warszawa"
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('organizations', null, {});
    }
};
