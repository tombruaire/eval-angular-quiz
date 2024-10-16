import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  categoryContent: any[] = this.categoryService.categoryContent;

  playerName = '';
  categoryId = null;

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.categoryId, this.playerName]);
  }

  ngOnInit(): void {
    this.categoryService.getCategoryContent();
  }
}
