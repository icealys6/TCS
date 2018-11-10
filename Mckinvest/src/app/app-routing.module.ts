import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MriComponent } from './mri/mri.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: './ui/home/', component: HomeComponent },
  { path: './ui/transactions/', component: TransactionsComponent },
  { path: './ui/mri/', component: MriComponent },
  { path: './ui/about/', component: AboutComponent },
  { path: './ui/contact-us/', component: ContactUsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
