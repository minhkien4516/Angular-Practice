import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Iphone 12 Pro Max', 12000000),
    new Ingredient('Apple Watch SE', 4000000),
  ];
  constructor() {}

  ngOnInit(): void {}
}
