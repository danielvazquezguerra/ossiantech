import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EditFormComponent } from './components/editform/editform.component';

const routes: Routes = [


  { path: '', component: MainComponent },
  {path: 'update/:id', component: EditFormComponent},


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
