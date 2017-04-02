import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header-and-footer/header.component';
import { FooterComponent } from './header-and-footer/footer.component';

@NgModule({
  declarations: [
      AppComponent,
      NavigationComponent,
      QuestionsComponent,
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
