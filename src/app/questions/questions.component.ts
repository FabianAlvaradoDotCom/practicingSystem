import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { IQuestionAnswer } from './question-answer'; // DataService Structure defined
import { QuestionsDataService } from './questions-data.service'; // Importing actual data for questions


function answerValidation(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
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

    questionsAnswers: IQuestionAnswer[];// Data service added using an interface
    questionsForm: FormGroup;

    get arrayAnswers(): FormArray {
        return <FormArray>this.questionsForm.get('arrayAnswers');
    }    

    constructor(private myFormBuilder: FormBuilder, private _questionsAnswers: QuestionsDataService) { }// DataService initialized

    ngOnInit(): void {
        this.questionsAnswers = this._questionsAnswers.getQuestionAnswer();///////////////
        this.questionsForm = this.myFormBuilder.group({            
            displayQuestions: true,
            arrayAnswers: this.myFormBuilder.array([this.buildAddress()])
        });

        this.addAddress(); // To make the questions populate automatically
    }

    //addAddress(): void {  //To add individually the questions
    //    this.arrayAnswers.push(this.buildAddress());
    //}

    addAddress(): void {
        for (let f = 0; f < this.questionsAnswers.length - 1; f++) {
            this.arrayAnswers.push(this.buildAddress());
        }
    }

    buildAddress(): FormGroup {
        return this.myFormBuilder.group({           
            answerField: ['', answerValidation(1, 5)]           
        });
    }
    save(): void {
        console.log(this.questionsForm);
        console.log('Saved: ' + JSON.stringify(this.questionsForm.value));
    }    
}
