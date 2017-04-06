import { Injectable } from '@angular/core';
import { IQuestionAnswer } from './question-answer';

@Injectable()
export class QuestionsDataService {
    getQuestionAnswer(): IQuestionAnswer[] {
        return [
            {
                "id": "q01",
                "type": "text",
                "placeholder": "Write the answer...",
                "formControlName": "input1",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What Attribute tells the browser that form-data (input) should not be validated when submitted?",
                "answer": "novalidate",
                "errorMessage":"Tip: It is like novalidate..."
            },
            {
                "id": "q02",
                "type": "text",
                "placeholder": "Write the answer...",
                "formControlName": "input2",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What is the syntaxis of \"novalidate\" attribute? (Use this format: <element attribute=\"value\">)",
                "answer": "<form novalidate>",
                "errorMessage": "Wrong answer"
            },
            {
                "id": "q03",
                "type": "text",
                "placeholder": "Write the answer...",
                "formControlName": "input3",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What is the syntaxis of \"required\" attribute? (Use this format: <element attribute=\"value\">)",
                "answer": "Fkjhgfkjhgf",
                "errorMessage": "Wrong answer"
            },
            {
                "id": "q04",
                "type": "text",
                "placeholder": "Write the answer...",
                "formControlName": "input4",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What is the syntaxis of \"required\" attribute? (Use this format: <element attribute=\"value\">)",
                "answer": "Fkjhgfkjhgf",
                "errorMessage": "Wrong answer"
            }
        ];
    }
}