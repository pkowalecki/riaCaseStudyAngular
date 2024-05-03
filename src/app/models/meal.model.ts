export class Meal {
  mealId: number = 0;
  additionDate: Date = new Date();
  editDate: Date = new Date();
  name: string = '';
  description: string = '';
  recipe: string = '';
  notes: string = '';
  isDeleted: boolean = false;
}
