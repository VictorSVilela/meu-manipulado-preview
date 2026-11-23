import { Component, input, output } from '@angular/core';
import { Product } from './catalog';
import { ProductCardComponent } from './product-card';

@Component({
  selector: 'app-featured-products',
  imports: [ProductCardComponent],
  template: `
    <section id="destaques" class="featured" aria-labelledby="featured-title">
      <div class="featured-heading">
        <h2 id="featured-title">Destaques da Semana</h2>
        <span class="demo-label">Catálogo demonstrativo</span>
        <button type="button" (click)="showAll.emit()">Ver todos os produtos <svg aria-hidden="true"><use href="assets/home/interface.svg#arrow"/></svg></button>
      </div>
      @if (products().length) {
        <div class="product-grid">
          @for (product of products(); track product.id) {
            <app-product-card [product]="product" [favorite]="favorites().includes(product.id)" (toggleFavorite)="toggleFavorite.emit($event)" (addToCart)="addToCart.emit($event)"/>
          }
        </div>
      } @else {
        <p class="empty">Nenhum produto demonstrativo encontrado.</p>
      }
    </section>
  `,
})
export class FeaturedProductsComponent {
  readonly products = input.required<readonly Product[]>();
  readonly favorites = input.required<readonly string[]>();
  readonly showAll = output<void>();
  readonly toggleFavorite = output<string>();
  readonly addToCart = output<string>();
}
