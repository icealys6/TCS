import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { MriComponent } from '../mri/mri.component';
import { AboutComponent } from '../about/about.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TransactionsComponent,
    MriComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
