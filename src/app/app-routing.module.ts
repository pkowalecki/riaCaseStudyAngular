import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './meal-list/meal-list.component';
import { AddEditMealComponent } from './add-edit-meal/add-edit-meal.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  { path: 'meals', component: MealListComponent },
  { path: 'meals/add', component: AddEditMealComponent },
  { path: 'meals/:id/edit', component: AddEditMealComponent },
  { path: 'meals/:id/delete', component: DeleteConfirmationComponent },
  { path: 'meals/:id', component: MealDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
