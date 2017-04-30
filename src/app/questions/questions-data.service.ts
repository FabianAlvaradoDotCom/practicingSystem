﻿import { Injectable } from '@angular/core';
import { IQuestionAnswer } from './question-answer';

@Injectable()
export class QuestionsDataService {
    getQuestionAnswer(): IQuestionAnswer[] {
        return [
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Cannot start with a number, cannot have spaces, reserved words nor characters except \"$\" \"_\", the variable...",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "name",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Prints a console  a warning",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "console.warn();",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "code",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Prints a console error",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "console.error();",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "code",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Data types that represent a single value, meaning it is not an object.",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Primitive Data Types",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "____ Data Types",
                "errorMessage": "Wrong answer, verify capital letters"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Mention the Primitive Data Types alphabetically ordered",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Boolean, Null, Number, String, Symbol, Undefined",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "",
                "errorMessage": "Tip, there are 6"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "A special function syntactically differently that generally takes two parameters and returns one result. It uses the \"infix notation\" which means that the operator is placed between the 2 values to process.",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Operator",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Math Functions",
                "class": "bdg4",
                "questionPart1": "Write the code to print in the console a Random Number",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "console.log(Math.random());",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "code",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Math Functions",
                "class": "bdg4",
                "questionPart1": "Write the code to Round and print in the console this number: 8.5",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "console.log(Math.round(8.5));",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "code",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Mention 7 Host Objects alphabetically ordered",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Comment, Console, Document, Element, Event, Node, Window",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "",
                "errorMessage": "Tip: C, C, D, E, E, N, W"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Mention 7 Core Objects alphabetically ordered",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Array, Boolean, Date, Math, Number, Object, String",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "",
                "errorMessage": "Tip: A, B, D, M, N, O, S"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Switch Statement",
                "questionPart2": "Create the var \"varCompare\" = 10. Then write the code to compare through a Switch statement the var \"varCompare\" against 2 values to print in the console:",
                "questionPart3": "-\"Option1\" if equals to 5.",
                "questionPart4": "-Or printing \"Option2\" if equals to 9.",
                "questionPart5": "-Or a third option as default, printing in the console \"Option3\".",
                "answer": "var varCompare = 10; \nswitch (varCompare) { \ncase 5: \nconsole.log(\"Option1\"); \nbreak; \ncase 9: \nconsole.log(\"Option2\"); \nbreak; \ndefault: \nconsole.log(\"Option3\"); \nbreak; \n}",
                "id": "",
                "rows": 12,
                "type": "",
                "contentType": "code",
                "placeholder": "",
                "errorMessage": "Wrong answer."
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Write the code to convert \"myVar\" into a number",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Number(myVar);",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "code",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            }, {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Host Objects, Core Objects and Objects defined by the coder are types of what",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Javascript Objects",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "Javascript _________",
                "errorMessage": "Wrong answer"
            }, {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "All the coding written by the developer is by default child of the Window Object",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "True",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "True or false",
                "errorMessage": "True or false"
            }, {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Is it possibe to redeclare one of the methods that are by default methods of the Window? Like redefining the alert() so it logs a console message instead of alerting?",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "Yes",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "Yes or no",
                "errorMessage": "True or false"
            }, {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "questionPart1": "Strict mode makes it easier to write \"secure\" JavaScript.\nStrict mode changes previously accepted \"bad syntax\" into real errors.\nIn normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.\nIn normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.\In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.",
                "questionPart2": "",
                "questionPart3": "",
                "questionPart4": "",
                "questionPart5": "",
                "answer": "True",
                "id": "",
                "rows": 2,
                "type": "",
                "contentType": "",
                "placeholder": "True or false",
                "errorMessage": "True or false"
            }
        ];
    }
}