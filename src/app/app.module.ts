import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/content/about-me/about-me.component';
import { ExperiencesComponent } from './components/content/experiences/experiences.component';
import { IntroductionComponent } from './components/content/introduction/introduction.component';
import { StudyComponent } from './components/content/study/study.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperiencesComponent,
    IntroductionComponent,
    StudyComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
