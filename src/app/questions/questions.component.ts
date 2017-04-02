import { Component } from '@angular/core';

import { IQuestionAnswer } from './question-answer';
import { QuestionsDataService } from './questions-data.service';

@Component({
    moduleId: module.id,
    selector: 'app-questions',
    templateUrl: 'questions.component.html'
})
export class QuestionsComponent {

    questionsAnswers: IQuestionAnswer[];

    constructor(private _questionsAnswers: QuestionsDataService) { }

    ngOnInit(): void {
        this.questionsAnswers = this._questionsAnswers.getQuestionAnswer();
    }
}
