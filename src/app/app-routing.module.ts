import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TodoappComponent } from './todo/todoapp/todoapp.component';

const routes: Routes = [ { path: 'Home', component: HomeComponent },
 { path: 'Contact', component: ContactComponent },
 { path: 'Todo', component: TodoappComponent },   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
