import { Component, output } from '@angular/core';
import { DemoPanel } from './header';

@Component({
  selector: 'app-mobile-shortcuts',
  template: `
    <nav class="mobile-shortcuts" aria-label="Atalhos da loja">
      <button type="button" (click)="panel.emit('solicitacao')"><svg aria-hidden="true"><use href="assets/home/interface.svg#mortar"/></svg>Manipulados</button>
      <a href="#destaques" (click)="reset.emit()"><svg aria-hidden="true"><use href="assets/home/interface.svg#bag"/></svg>Produtos</a>
      <a href="#destaques" (click)="promotions.emit()"><svg aria-hidden="true"><use href="assets/home/interface.svg#tag"/></svg>Promoções</a>
      <button type="button" (click)="panel.emit('conteudos')"><svg aria-hidden="true"><use href="assets/home/interface.svg#book"/></svg>Conteúdos</button>
    </nav>
    <button class="mobile-formula" type="button" aria-label="Solicitar fórmula personalizada" (click)="panel.emit('solicitacao')">
      <span><strong>Fórmulas<br>personalizadas</strong><small>para o seu bem-estar</small></span>
      <img src="assets/home/formula-mobile.png" alt="" width="93" height="109" loading="lazy">
    </button>
  `,
})
export class MobileShortcutsComponent {
  readonly panel = output<DemoPanel>();
  readonly reset = output<void>();
  readonly promotions = output<void>();
}

@Component({
  selector: 'app-mobile-navigation',
  template: `
    <nav class="mobile-navigation" aria-label="Navegação da loja no celular">
      <a href="#inicio" class="mobile-home"><svg aria-hidden="true"><use href="assets/home/interface.svg#home"/></svg>Início</a>
      <a href="#destaques" (click)="reset.emit()"><svg aria-hidden="true"><use href="assets/home/interface.svg#grid"/></svg>Produtos</a>
      <button type="button" (click)="panel.emit('solicitacao')"><svg aria-hidden="true"><use href="assets/home/interface.svg#mortar"/></svg>Manipulados</button>
      <button type="button" (click)="panel.emit('pedidos')"><svg aria-hidden="true"><use href="assets/home/interface.svg#orders"/></svg>Pedidos</button>
      <button type="button" (click)="panel.emit('conta')"><svg aria-hidden="true"><use href="assets/home/interface.svg#user"/></svg>Conta</button>
    </nav>
  `,
})
export class MobileNavigationComponent {
  readonly panel = output<DemoPanel>();
  readonly reset = output<void>();
}
