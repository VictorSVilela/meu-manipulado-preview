import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Product } from './catalog';

@Component({
  selector: 'app-product-card',
  imports: [ButtonModule],
  template: `
    <article class="product-card">
      <div class="product-visual">
        <img [src]="'assets/home/' + product().id + '.png'" [alt]="product().name + ' — imagem ilustrativa'">
        @if (product().previousPrice) { <span class="discount">-30%</span> }
        <button class="favorite" type="button" [attr.aria-pressed]="favorite()" [attr.aria-label]="'Favoritar ' + product().name" (click)="toggleFavorite.emit(product().id)">
          <svg aria-hidden="true"><use href="assets/home/interface.svg#heart"/></svg>
        </button>
      </div>
      <div class="product-content">
        <h3>{{ product().name }}</h3>
        <p>{{ product().description }}</p>
        <p class="rating" [attr.aria-label]="'Avaliação simulada: ' + product().rating + ' de 5, ' + product().reviews + ' avaliações'"><span aria-hidden="true">★</span> {{ product().rating }} ({{ product().reviews }})</p>
        <div class="product-bottom">
          <div class="prices">
            @if (product().previousPrice) { <del>R$ {{ product().previousPrice }}</del> }
            <strong>R$ {{ product().price }}</strong>
          </div>
          <button pButton class="add-cart" type="button" [attr.aria-label]="'Adicionar ' + product().name + ' ao carrinho demonstrativo'" (click)="addToCart.emit(product().id)">
            <svg aria-hidden="true"><use href="assets/home/interface.svg#cart"/></svg>
          </button>
        </div>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly favorite = input(false);
  readonly toggleFavorite = output<string>();
  readonly addToCart = output<string>();
}
