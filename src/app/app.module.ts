import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { FilerByNamePipe } from './filer-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { DistinctDataComponent } from './components/distinct-data/distinct-data.component';
import { RouterModule, Routes } from "@angular/router";
import { ExperienceCandidateComponent } from './components/experience-candidate/experience-candidate.component';



@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    FilerByNamePipe,
    DistinctDataComponent,
    ExperienceCandidateComponent
  ],
  imports: [
    // RouterModule.forRoot(appRouting),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
