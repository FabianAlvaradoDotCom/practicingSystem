import { Injectable } from '@angular/core';
import { IQuestionAnswer } from './question-answer';

@Injectable()
export class QuestionsDataService {
    getQuestionAnswer(): IQuestionAnswer[] {
        return [
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Cannot start with a number, cannot have spaces, reserved words nor characters except \"$\" \"_\", the variable...",
                "answer": "name",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Prints a console  a warning",
                "answer": "console.warn();",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Prints a console error",
                "answer": "console.error();",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Data types that represent a single value, meaning it is not an object.",
                "answer": "Primitive Data Types",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "____ Data Types",
                "errorMessage": "Wrong answer, verify capital letters"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Mention the Primitive Data Types alphabetically ordered",
                "answer": "Boolean, Null, Number, String, Symbol, Undefined",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Tip, there are 6"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "A special function syntactically differently that generally takes two parameters and returns one result. It uses the \"infix notation\" which means that the operator is placed between the 2 values to process.",
                "answer": "Operator",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Math Functions",
                "class": "bdg4",
                "question": "Write the code to print in the console a Random Number",
                "answer": "console.log(Math.random());",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Math Functions",
                "class": "bdg4",
                "question": "Write the code to Round and print in the console this number: 8.5",
                "answer": "console.log(Math.round(8.5));",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Mention 7 Host Objects alphabetically ordered",
                "answer": "Comment, Console, Document, Element, Event, Node, Window",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Tip: C, C, D, E, E, N, W"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Mention 7 Core Objects alphabetically ordered",
                "answer": "Array, Boolean, Date, Math, Number, Object, String",
                "id": "",
                "rows": 2,
                "type": "",
                "placeholder": "",
                "errorMessage": "Tip: A, B, D, M, N, O, S"
            },
            {
                "subject": "JS",
                "questionTopic": "Basics",
                "class": "bdg4",
                "question": "Write the code to compare through a Switch statement the var \"varCompare\" against 2 values to print in the console: \"Option1\" or printing \"Option2\" or a third option as default, printing in the console \"Option3\"",
                "answer": "var varCompare = 10; \nswitch (varCompare) { \ncase 5: \nconsole.log(\"Option1\"); \nbreak; \ncase 9: \nconsole.log(\"Option2\"); \nbreak; \ndefault: \nconsole.log(\"Option3\"); \nbreak; \n}",
                "id": "",
                "rows": 12,
                "type": "",
                "placeholder": "",
                "errorMessage": "Wrong answer."
            }
        ];
    }
}