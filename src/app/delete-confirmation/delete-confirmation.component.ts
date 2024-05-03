import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meal } from '../models/meal.model';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
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

  confirmDelete(): void {
    if (this.meal) {
      this.mealService.deleteMeal(this.meal.mealId)
        .subscribe(() => this.goBack());
    }
  }

  cancelDelete(): void {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
