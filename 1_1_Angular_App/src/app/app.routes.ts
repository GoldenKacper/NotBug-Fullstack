import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './components/car-list/car-list.component';
import {CarFormComponent} from './components/car-form/car-form.component';
import {CarDetailsComponent} from './components/car-details/car-details.component';

export const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/new', component: CarFormComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'cars/:id/edit', component: CarFormComponent},
  {path: '**', redirectTo: '/cars'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
