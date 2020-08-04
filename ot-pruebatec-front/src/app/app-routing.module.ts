import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [


  { path: '', component: MainComponent },
  {path: 'detail/:id', component: EditComponent},


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
