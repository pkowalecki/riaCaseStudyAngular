import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meal } from '../models/meal.model';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  meal: Meal | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.mealService.getMeal(id)
        .subscribe((meal: Meal) => this.meal = meal);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
