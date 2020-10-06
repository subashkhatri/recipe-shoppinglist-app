import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A test', 'Test Desciption', 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg'),
    new Recipe('A recipe for MOMO', 'Delecious Momo', 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
