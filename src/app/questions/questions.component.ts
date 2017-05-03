import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { IQuestionAnswer } from './question-answer'; // DataService Structure defined
import { QuestionsDataService } from './questions-data.service'; // Importing actual data for questions

function answerValidation(toCheck: string, cntType): ValidatorFn {  // Function with parameters
    return (c: AbstractControl): { [key: string]: boolean } | null => {

       toCheck = convertToLower(toCheck, cntType); // Verifies the if answer in the repository is code or text, based on that converts to lower
       var enteredData = convertToLower(c.value, cntType);// Verifies the if answer in the repository is code or text, based on that converts the user entered data to lower
        
        if (!compareWordByWord(toCheck, enteredData)) {            
            return { 'match': true };
        };
        return null;
    };
};

function cleanSpace(val): string {  
    val = val.replace(/\r?\n|\r/g, " "); // Converts breaklines to spaces
    val = val.replace(/               /g, " "); // Converts multi-spaces to single-spaces
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
    val = val.replace(/ \(/g, "("); // Removes the spaces before and after left and right parenthesis and curly braces
    val = val.replace(/ \)/g, ")");
    val = val.replace(/\( /g, "(");
    val = val.replace(/\) /g, ")");
    val = val.replace(/ \{/g, "{");
    val = val.replace(/ \}/g, "}");
    val = val.replace(/\{ /g, "{");
    val = val.replace(/\} /g, "}");

    val = val.replace(/\, /g, ",");
    val = val.replace(/ \,/g, ",");

    val = val.replace(/\: /g, ":");
    val = val.replace(/ \:/g, ":");

    val = val.replace(/\; /g, ";");
    val = val.replace(/ \;/g, ";");

    val = val.replace(/\+ /g, "+");
    val = val.replace(/ \+/g, "+");

    val = val.replace(/\* /g, "*");
    val = val.replace(/ \*/g, "*");

    val = val.replace(/\- /g, "-");
    val = val.replace(/ \-/g, "-");

    val = val.replace(/\% /g, "%");
    val = val.replace(/ \%/g, "%");

    val = val.replace(/\& /g, "&");
    val = val.replace(/ \&/g, "&");

    val = val.replace(/\| /g, "|");
    val = val.replace(/ \|/g, "|");

    val = val.replace(/\< /g, "<");
    val = val.replace(/ \</g, "<");

    val = val.replace(/\> /g, ">");
    val = val.replace(/ \>/g, ">");

    val = val.replace(/\= /g, "=");
    val = val.replace(/ \=/g, "=");

    val = val.replace(/\. /g, ".");
    val = val.replace(/ \./g, ".");

    return val;
};

function convertToLower(val, contType) {  // If the answer is set to text type, it converts all to lowercase, not if it is code
    if (contType != "code") {
        val = val.toLowerCase();
        return val;
    } else {
        return val;
    };
};

function compareWordByWord(answerInRepo, answerEntered) {
    var arrayInRepo = cleanSpace(answerInRepo).split(" ");
    var arrayEntered = cleanSpace(answerEntered).split(" ");

    for (let i = 0; i < arrayInRepo.length; i++){
        if (arrayInRepo[i] != arrayEntered[i]) {
            return false;
        };
    };
    return true;
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
    js: string = "";
    storyline: string = "";

    get arrayAnswers(): FormArray {
        return <FormArray>this.questionsForm.get('arrayAnswers');
    }
    constructor(private myFormBuilder: FormBuilder, private _questionsAnswers: QuestionsDataService) { }// DataService initialized
    ngOnInit(): void {
        this.questionsAnswers = this._questionsAnswers.getQuestionAnswer();///////////////
        this.questionsForm = this.myFormBuilder.group({
            displayQuestions: true,          
            arrayAnswers: this.myFormBuilder.array([])
        });
        this.addAnswer(); // To make the questions populate automatically
    }
    addAnswer(): void {
        for (let f = 0; f < this.questionsAnswers.length; f++) {
            this.arrayAnswers.push(this.buildAnswer(this.questionsAnswers[f].answer, this.questionsAnswers[f].contentType));
        }
    }
    buildAnswer(valor: any, contentType: any): FormGroup {
        return this.myFormBuilder.group({
            answerField: ['', answerValidation(valor, contentType)],
            correctAnswerField: ''
        });
    }
    save(): void {
        console.log(this.questionsForm);
        console.log('Saved: ' + JSON.stringify(this.questionsForm.value));
    }
    showAnswer(received) {
        received["mostrar"] = !received["mostrar"];
    };
    showSubjects(subject: string) {        
        switch (subject) {
            case 'JS':
                this.js = this.js == "" ? 'JS' : "";
                break;
            case 'StoryLine':
                this.storyline = this.storyline == "" ? "StoryLine" : "";
        }
    };
}
