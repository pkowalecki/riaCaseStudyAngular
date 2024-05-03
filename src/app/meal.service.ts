import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Meal } from './models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'http://localhost:8080/auth/meal';
  private apiAllMeals = 'http://localhost:8080/auth/meal/allMeal';

  constructor(private http: HttpClient) { }

  getMeals(): Observable<Meal[]> {
    const url = `${this.apiUrl}/allMeal`;
    return this.http.get<Meal[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getMeal(id: number): Observable<Meal> {
    const url = `${this.apiUrl}/getMeal/${id}`;
    return this.http.get<Meal>(url).pipe(
      catchError(this.handleError)
    );
  }

  addMeal(meal: Meal): Observable<Meal> {
    const url = `${this.apiUrl}/addMealTest`;
    return this.http.post<Meal>(url, meal).pipe(
      catchError(this.handleError)
    );
  }

  editMeal(meal: Meal): Observable<any> {
    const url = `${this.apiUrl}/edit/${meal.mealId}`;
    return this.http.put(url, meal).pipe(
      catchError(this.handleError)
    );
  }

  deleteMeal(id: number): Observable<any> {
    const url = `${this.apiUrl}/deleteMeal/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error('Wystąpił błąd:', error);
    return throwError(error);
  }
}
