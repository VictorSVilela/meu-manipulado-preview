import { Component, input, output } from '@angular/core';
import { categories } from './catalog';

@Component({
  selector: 'app-categories',
  template: `
    <nav id="categorias" class="categories" aria-label="Categorias de produtos">
      @for (category of categories; track category; let i = $index) {
        <button type="button" [attr.aria-pressed]="active() === category" (click)="selectCategory.emit(category)">
          <span class="category-icon"><span class="prototype-icon" [style.--icon-offset.px]="-i * 48" aria-hidden="true"></span></span>
          <span>{{ category }}</span>
        </button>
      }
    </nav>
  `,
})
export class CategoriesComponent {
  readonly active = input<string | null>(null);
  readonly selectCategory = output<string>();
  protected readonly categories = categories;
}
