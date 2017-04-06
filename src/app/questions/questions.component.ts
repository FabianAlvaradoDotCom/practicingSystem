import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

import { IQuestionAnswer } from './question-answer';//////////////////
import { QuestionsDataService } from './questions-data.service';///////////////

function ratingRange(min: number, max: number): ValidatorFn {
    return  (c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        };
        return null;
    };
}

@Component({
    moduleId: module.id,
    selector: 'app-questions-component',
    templateUrl: 'questions.component.html'
})
export class QuestionsComponent implements OnInit {

    questionsAnswers: IQuestionAnswer[];////////////
    customerForm: FormGroup;

    constructor(private fb: FormBuilder, private _questionsAnswers: QuestionsDataService) { }///////////////////////

    ngOnInit(): void {
        this.questionsAnswers = this._questionsAnswers.getQuestionAnswer();///////////////
        this.customerForm = this.fb.group({            
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true
        });
    }

    save(): void {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
