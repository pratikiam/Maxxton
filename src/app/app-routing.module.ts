import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { DistinctDataComponent } from './components/distinct-data/distinct-data.component';
import { ExperienceCandidateComponent } from './components/experience-candidate/experience-candidate.component';


const routes: Routes = [   
  { path :'', component:CandidatesComponent,pathMatch:'full'},
  { path: 'distinct', component: DistinctDataComponent },
  { path:'experience', component:ExperienceCandidateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
