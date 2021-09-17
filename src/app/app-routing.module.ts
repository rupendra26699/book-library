import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'' , redirectTo: 'login',pathMatch: 'full'},
  {path:'login' , component : LoginComponent},
  {path:'signup' , component : SignupComponent},
  {path:'dashboard' , component : DashboardComponent},
  {path:'addBook',component : AddBookComponent},
  {path:'editBook',component : EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
