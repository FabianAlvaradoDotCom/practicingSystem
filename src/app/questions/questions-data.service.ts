import { Injectable } from '@angular/core';
import { IQuestionAnswer } from './question-answer';

@Injectable()
export class QuestionsDataService {
    getQuestionAnswer(): IQuestionAnswer[] {
        return [
            {
                "id":"q01",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What Attribute tells the browser that form-data (input) should not be validated when submitted?",
                "answer": "novalidate"
            },
            {
                "id": "q02",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What is the syntaxis of \"novalidate\" attribute? (Use this format: <element attribute=\"value\">)",
                "answer": "<form novalidate>"
            },
            {
                "id": "q03",
                "subject": "HTML",
                "questionTopic": "Forms",
                "question": "What is the syntaxis of \"required\" attribute? (Use this format: <element attribute=\"value\">)",
                "answer": ""
            }
        ];
    }
}