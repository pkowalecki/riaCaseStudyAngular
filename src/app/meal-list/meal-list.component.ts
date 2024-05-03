import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../models/meal.model';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService, private router: Router) { }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getMeals().subscribe(meals => this.meals = meals);
  }

  editMeal(meal: Meal): void {
    this.router.navigate(['meals', meal.mealId, 'edit']);
  }

  deleteMeal(meal: Meal): void {
    if (confirm(`Czy na pewno chcesz usunąć posiłek "${meal.name}"?`)) {
      this.mealService.deleteMeal(meal.mealId).subscribe(() => {
        this.meals = this.meals.filter(m => m !== meal);
      });
    }
  }
}
