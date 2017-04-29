import { Component } from '@angular/core';
import { QuestionsDataService } from './questions/questions-data.service';

@Component({
    selector: 'app-practicing',
    template: `
          <app-questions-component></app-questions-component>   
    `,
    providers: [QuestionsDataService]
})
export class AppComponent { }
