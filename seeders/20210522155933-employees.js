'use strict';
//wytestowac emp id bo przy sedowaniu nie mozna 5 uzytkownikow doda cos sie jebie
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            "employees",
            [
                {
                    emp_id: 1,
                    first_name: "Patryk",
                    last_name: "Kowalski",
                    gender: "M",
                    email: "test1@faceobook.com",
                    password: "1234test",
                    phone_number: "123456789",
                    hire_date: new Date('1988-03-21'),
                    job_id: 1
                }, {
                    emp_id: 2,
                    first_name: "Maria",
                    last_name: "Kowalska",
                    gender: "F",
                    email: "test@facebopok.com",
                    password: "1234testt",
                    phone_number: "123777787",
                    hire_date: new Date('1988-03-21'),
                    job_id: 3
                }, {
                    emp_id: 3,
                    first_name: "Kasia",
                    last_name: "Warzywko",
                    gender: "F",
                    email: "tes1t@facebkook.com",
                    password: "1234testt",
                    phone_number: "12346787",
                    hire_date: new Date('1999-04-22'),
                    job_id: 2
                }, {
                    emp_id: 4,
                    first_name: "Marianek",
                    last_name: "Rutek",
                    gender: "M",
                    email: "test2@facebojok.com",
                    password: "1234testt",
                    phone_number: "12345677",
                    hire_date: new Date('2018-05-21'),
                    job_id: 4
                }, {
                    emp_id: 5,
                    first_name: "Marian",
                    last_name: "Rutkowski",
                    gender: "M",
                    email: "test3@faceblook.com",
                    password: "1234testt",
                    phone_number: "12356787",
                    hire_date: new Date('2008-08-29'),
                    job_id: 4
                }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('employees', null, {});
    }
};
