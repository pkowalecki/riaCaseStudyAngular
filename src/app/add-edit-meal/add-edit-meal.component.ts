import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meal } from '../models/meal.model';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-add-edit-meal',
  templateUrl: './add-edit-meal.component.html',
  styleUrls: ['./add-edit-meal.component.css']
})
export class AddEditMealComponent implements OnInit {
  meal: Meal = new Meal();
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.checkEditMode();
  }

  checkEditMode(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.isEdit = true;
      this.mealService.getMeal(id)
        .subscribe((meal: Meal) => this.meal = meal);
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.mealService.editMeal(this.meal)
        .subscribe(() => this.goBack());
    } else {
      this.mealService.addMeal(this.meal)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
