import { Injectable } from '@angular/core';
import { IQuestionAnswer } from './question-answer';

@Injectable()
export class QuestionsDataService {
    getQuestionAnswer(): IQuestionAnswer[] {
        return [
            {
                "subject": "PHP",
                "questionTopic": "Configuration",
                "question": "What file contains the basic configuration of Wamp?",
                "answer": "php.ini",
                "id": "",
                "type": "text",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "Configuration",
                "question": "Once you are on this directory: C:\\wamp64\\bin\\mysql\\mysql5.7.14\\bin>, what is the command you type to create the password for the root admin?",
                "answer": "mysqladmin -u root password",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Tip: Add admin..."
            },
            {
                "subject": "PHP",
                "questionTopic": "Configuration",
                "question": "Once you are set as the root admin and on the right directory, what is the command you type to make MySQL prompts for a root admin password when accessing mysql?",
                "answer": "mysqladmin -u root -p password",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Tip: Add admin..."
            },
            {
                "subject": "PHP",
                "questionTopic": "Configuration",
                "question": "What is the command to login MySQL as root user, so it prompts for the password?",
                "answer": "mysql -u root -p",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Tip: No admin word here..."
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What is the command to show the existent databases?",
                "answer": "SHOW DATABASES;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to create a database named \"pagos\"?",
                "answer": "CREATE DATABASE pagos;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to select a database named \"entradas\" and start using it?",
                "answer": "USE entradas;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to delete a database named \"altas\"?",
                "answer": "DROP DATABASE altas;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to create an admin user named \"db_admin\" with password \"secret\" for an especific local database named \"db_pagos\"?",
                "answer": "GRANT ALL PRIVILEGES ON db_pagos.* TO 'db_admin'@'localhost' IDENTIFIED BY 'secret';",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to display the privileges granted to \"my_db_admin\" on this local database \"db_employees\"?",
                "answer": "SHOW GRANTS FOR 'my_db_admin'@'localhost';",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to login with the user \"admin_db\" to this particular database \"db_personas\"?",
                "answer": "mysql -u admin_db -p db_personas",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What is the command to show the existent tables in the current database?",
                "answer": "SHOW TABLES;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to create a table named \"sales\", that contains: A primary key \"id\", 11 integers, not null that will auto increment, a key named \"products\", string of 200 chars, not null, a key named \"payed\", boolean of 1 digit, not null?",
                "answer": "CREATE TABLE sales ( id INT(11) NOT NULL AUTO_INCREMENT, products VARCHAR(200) NOT NULL, payed TINYINT(1) NOT NULL, PRIMARY KEY (id));",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to remove all privileges to user  named \"db_admin\"from a local database?",
                "answer": "REVOKE ALL PRIVILEGES ON *.* FROM 'db_admin'@'localhost';",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to refresh privileges from all users?",
                "answer": "FLUSH PRIVILEGES;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to show all columns contained in the table \"employees\"?",
                "answer": " SHOW COLUMNS FROM employees;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to insert a record to a table named \"teams\", that includes this data, key: \"team_name\": \"Heat\", key: \"position\": \"1\", key \"won\": true?",
                "answer": "INSERT INTO teams (team_name, position, won) VALUES ('Heat', 1, 1);",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to update a record of a table named \"arrivals\", the update goes in the column \"position\", the record will be equals 20, for the record id: 2",
                "answer": "UPDATE arrivals SET position = 20 WHERE id = 2;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "PHP",
                "questionTopic": "MySQL",
                "question": "What would be the command to delete the record with id: 10 of a table named \"clients\"?",
                "answer": "DELETE FROM clients WHERE id = 10;",
                "id": "",
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            }
        ];
    }
}