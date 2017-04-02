import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Welcome to my practice App!';
    subtitle: string = `The purpose of this app is not to explain the concepts and theory of the coding on this 
    technologies, please refer to the subject matter experts to learn from them. It is instead meant to help you to practice 
    the sintaxis of the expressions as most likely we do not practice all we learned in a daily basis, so take a 
    few minutes to refresh all knowledge it costed blood sweat and tears to gain and challenge you to do it faster and better everytime`;
}
