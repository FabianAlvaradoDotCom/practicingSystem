import { Component } from '@angular/core';
import { QuestionsDataService } from './questions/questions-data.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [QuestionsDataService]
})
export class AppComponent {
}
