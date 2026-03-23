import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyDataComponent } from './my-data/my-data.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { UserAccountDeatilsComponent } from './user-account-deatils/user-account-deatils.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'table', component: MyDataComponent },
  { path: 'contacts', component: ContactsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-account-details', component: UserAccountDeatilsComponent },


  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
