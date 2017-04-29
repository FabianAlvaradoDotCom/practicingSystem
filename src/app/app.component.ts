import { Component } from '@angular/core';
import { QuestionsDataService } from './questions/questions-data.service';

@Component({
    selector: 'app-practicing',
    template: `
          <app-questions-component></app-questions-component>
<app-footer></app-footer>
    `,
    providers: [QuestionsDataService]
})
export class AppComponent { }
