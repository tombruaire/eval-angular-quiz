import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(
    private router: Router,
  ) {
  }

  playerName = '';
  categoryId = null;

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.categoryId, this.playerName]);
  }
}
