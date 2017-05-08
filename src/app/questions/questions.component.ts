'use strict';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { IQuestionAnswer } from './question-answer'; // DataService Structure defined
import { QuestionsDataService } from './questions-data.service'; // Importing actual data for questions

function answerValidation(toCheck: string, cntType): ValidatorFn {  // Function with parameters
    return (c: AbstractControl): { [key: string]: boolean } | null => {

        toCheck = codeOrText(toCheck, cntType); // Verifies the if answer in the repository is code or text, based on that converts to lower or changes quotatino marks
        var enteredData = codeOrText(c.value, cntType);// Verifies the if answer in the repository is code or text, based on that converts the user entered data to lower

        if (!compareWordByWord(toCheck, enteredData)) {
            return { 'match': true };
        };
        return null;
    };
};

function cleanSpace(val): string {
    val = val.replace(/\r?\n|\r/g, " "); // Converts breaklines to spaces
    val = val.replace(/\t/g, " "); // Converts tabs to spaces
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

function codeOrText(val, contType) {  // If the answer is set to text type, it converts all to lowercase, not if it is code
    if (contType != "code") {
        val = val.toLowerCase();
        val = val.replace(/ and /g, ' '); // --------------------------------Replacing " and " by "" for better text validation        
        val = val.replace(/\,/g, ''); // --------------------------------Deleting commas for better text validation
        val = val.replace(/\./g, ''); // --------------------------------Deleting periods for better text validation
        return val;
    } else {
        if (val.split("'").length % 2 == 1) { // Making that the validation of code accepts single of double quotes pairs, but not alone quoting
            val = val.replace(/\'/g, '"');
        };
        return val;
    };
};

function compareWordByWord(answerInRepo, answerEntered) {
    var arrayInRepo = cleanSpace(answerInRepo).split(" ");
    var arrayEntered = cleanSpace(answerEntered).split(" ");

    for (let i = 0; i < arrayInRepo.length; i++) {
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

    // Topics of the questions
    /*js: string = "JS";
    storyline: string = "StoryLine";
    css: string = "CSS";
    ui: string = "UI";
    sql: string = "SQL";
    ionic: string = "Ionic";
    angularjs: string = "AngularJS";
    jasmine: string = "Jasmine";*/

    js: string = "";
    storyline: string = "";
    css: string = "";
    ui: string = "";
    sql: string = "";
    ionic: string = "";
    angularjs: string = "AngularJS";
    jasmine: string = "";


    filteredQ_A: any[] = [0]; // This will hold the objects for questions coming from questionsAnswers once they are filtered by the checkboxes


    get arrayAnswers(): FormArray {
        return <FormArray>this.questionsForm.get('arrayAnswers');
    }
    constructor(private myFormBuilder: FormBuilder, private _questionsAnswers: QuestionsDataService) { }// DataService initialized
    ngOnInit(): void {
        this.questionsAnswers = this._questionsAnswers.getQuestionAnswer();
        this.questionsForm = this.myFormBuilder.group({
            displayQuestions: true,
            arrayAnswers: this.myFormBuilder.array([])
        });
        this.addQuestionAnswer(); // To make the questions populate automatically
    }
    addQuestionAnswer(): void {

        let activeSubjectsCounter: number = 0;

        for (let f = 0; f < this.questionsAnswers.length; f++) {

            if (
                (this.js == 'JS' && this.questionsAnswers[f].subject == "JS")
                || (this.storyline == 'StoryLine' && this.questionsAnswers[f].subject == "StoryLine")
                || (this.css == 'CSS' && this.questionsAnswers[f].subject == "CSS")
                || (this.ui == 'UI' && this.questionsAnswers[f].subject == "UI")
                || (this.sql == 'SQL' && this.questionsAnswers[f].subject == "SQL")
                || (this.ionic == 'Ionic' && this.questionsAnswers[f].subject == "Ionic")
                || (this.angularjs == 'AngularJS' && this.questionsAnswers[f].subject == "AngularJS")
                || (this.jasmine == 'Jasmine' && this.questionsAnswers[f].subject == "Jasmine")
            ) {
                this.arrayAnswers.push(this.buildAnswer(this.questionsAnswers[f].answer, this.questionsAnswers[f].contentType));
                this.filteredQ_A[activeSubjectsCounter] = this.questionsAnswers[f];
                activeSubjectsCounter++;
                console.log(activeSubjectsCounter);
            }
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
                this.ngOnInit();
                break;
            case 'StoryLine':
                this.storyline = this.storyline == "" ? "StoryLine" : "";
                this.ngOnInit();
                break;
            case 'CSS':
                this.css = this.css == "" ? "CSS" : "";
                this.ngOnInit();
                break;
            case 'UI':
                this.ui = this.ui == "" ? "UI" : "";
                this.ngOnInit();
                break;
            case 'SQL':
                this.sql = this.sql == "" ? "SQL" : "";
                this.ngOnInit();
                break;
            case 'Ionic':
                this.ionic = this.ionic == "" ? "Ionic" : "";
                this.ngOnInit();
                break;
            case 'AngularJS':
                this.angularjs = this.angularjs == "" ? "AngularJS" : "";
                this.ngOnInit();
                break;
            case 'Jasmine':
                this.jasmine = this.jasmine == "" ? "Jasmine" : "";
                this.ngOnInit();
                break;
        };
    };
};
