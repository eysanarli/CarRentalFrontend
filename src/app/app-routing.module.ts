import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/carDetails/carDetails.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: 'brands', component: BrandComponent },
  { path: 'cars', component: CarDetailsComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'rentals', component: RentalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
