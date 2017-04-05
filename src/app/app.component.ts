import { Component } from '@angular/core';
import { QuestionsDataService } from './questions/questions-data.service';

@Component({
    selector: 'app-practicing',
    template: `
        <div class="container">
          <app-questions-component></app-questions-component>
        </div>
    `,
    providers: [QuestionsDataService]
})
export class AppComponent { }
