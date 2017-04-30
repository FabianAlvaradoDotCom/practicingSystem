﻿import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { IQuestionAnswer } from './question-answer'; // DataService Structure defined
import { QuestionsDataService } from './questions-data.service'; // Importing actual data for questions

function answerValidation(toCheck: string): ValidatorFn {  // Function with parameters
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if ((c.value.replace(/\r?\n|\r/g, " ").split(" ").join("") !== toCheck.replace(/\r?\n|\r/g, " ").split(" ").join("")) || (cleanSpace(c.value).split(" ").length !== cleanSpace(toCheck).split(" ").length)) {
            return { 'match': true };
        };
        return null;
    };
};

function cleanSpace(val): string {
    val = val.replace(/\r?\n|\r/g, " ");
    val = val.replace(/               /g, " ");
    val = val.replace(/              /g, " ");
    val = val.replace(/             /g, " ");
    val = val.replace(/            /g, " ");
    val = val.replace(/           /g, " ");
    val = val.replace(/          /g, " ");
    val = val.replace(/         /g, " ");
    val = val.replace(/        /g, " ");
    val = val.replace(/       /g, " ");
    val = val.replace(/      /g, " ");
    val = val.replace(/     /g, " ");
    val = val.replace(/    /g, " ");
    val = val.replace(/   /g, " ");
    val = val.replace(/  /g, " ");
    return val;
};

@Component({
    moduleId: module.id,
    selector: 'app-questions-component',
    templateUrl: 'questions.component.html'
})
export class QuestionsComponent implements OnInit {
    questionsAnswers: IQuestionAnswer[];// Data service added using an interface
    questionsForm: FormGroup;
    show: boolean = false;  // Not used, just for angular not to launch error.
    get arrayAnswers(): FormArray {
        return <FormArray>this.questionsForm.get('arrayAnswers');
    }
    constructor(private myFormBuilder: FormBuilder, private _questionsAnswers: QuestionsDataService) { }// DataService initialized
    ngOnInit(): void {
        this.questionsAnswers = this._questionsAnswers.getQuestionAnswer();///////////////
        this.questionsForm = this.myFormBuilder.group({
            displayQuestions: true,
            arrayAnswers: this.myFormBuilder.array([this.buildAnswer(this.questionsAnswers[0].answer)])
        });
        this.addAnswer(); // To make the questions populate automatically
    }
    addAnswer(): void {
        for (let f = 1; f < this.questionsAnswers.length; f++) {
            this.arrayAnswers.push(this.buildAnswer(this.questionsAnswers[f].answer));
        }
    }
    buildAnswer(valor: any): FormGroup {
        return this.myFormBuilder.group({
            answerField: ['', answerValidation(valor)],
            correctAnswerField: ''
        });
    }
    save(): void {
        console.log(this.questionsForm);
        console.log('Saved: ' + JSON.stringify(this.questionsForm.value));
    }
    showAnswer(received) {
        received["mostrar"] = !received["mostrar"];
    }
}
