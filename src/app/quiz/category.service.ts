import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  categoryContent: any[] = [];

  getCategoryContent() {
    this.http.get('http://localhost:3000/category').subscribe((category: any) => {
      for (const categorie of category) {
        this.categoryContent.push({
          id: categorie.id,
          categorie: categorie.libelle,
        });
      }
    });
  }

  getCategoryId() {
    this.http.get('http://localhost:3000/category').subscribe((category: any) => {
      for (const categorie of category) {
        this.http.get(`http://localhost:3000/category?categoryId=${categorie.id}`);
      }
    });
  }

  getCategoryName() {
    this.http.get('http://localhost:3000/category').subscribe((category: any) => {
      for (const categorie of category) {
        this.http.get(`http://localhost:3000/category?libelle=${categorie.libelle}`);
      }
    });
  }

  resetCategory() {
    this.categoryContent = [];
  }

}
