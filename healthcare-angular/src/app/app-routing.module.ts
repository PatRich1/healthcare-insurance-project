import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './components/claims/claims.component';
import { SubmitComponent } from './components/submit/submit.component';

const routes: Routes = [
  {path: 'claims', component: ClaimsComponent},
  {path: 'submit', component: SubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
