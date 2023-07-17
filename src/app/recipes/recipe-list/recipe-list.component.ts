import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Võ Kim Thoa',
      'She is a perfect wife',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/345440221_922636439017570_2558580986952735759_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O6szcbw4MM0AX8oES17&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCPJJiLxOHElYUwuOlc2wobtEtawnwwt6nnSfW-CnP4OA&oe=64BAC585'
    ),
    new Recipe(
      'Mai Trung Minh Kiên',
      'He is a good husband',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/336866943_243479534768810_1145096652804184648_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wBj1zBDeYw0AX_8YYkw&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBpRnk78GTOmyccIhV0M6Sms5Qlzvij8EdQf_Tq-fxhuA&oe=64B9DB26'
    ),
    new Recipe(
      'SH Mode 2022',
      'This is the nice bike that assist the married couple in daily moving ',
      'https://www.hondaducdung.com/files/product/sh-mode-125-ro1iasvu.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
