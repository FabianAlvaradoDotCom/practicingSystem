import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header-and-footer/header.component';
import { FooterComponent } from './header-and-footer/footer.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        QuestionsComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
