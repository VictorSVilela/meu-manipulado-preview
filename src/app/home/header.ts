import { Component, input, output, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

export type DemoPanel = 'conta' | 'favoritos' | 'carrinho' | 'solicitacao' | 'conteudos' | 'sobre' | 'contato';

@Component({
  selector: 'app-header',
  imports: [InputTextModule],
  template: `
    <header id="inicio" class="store-header">
      <div class="header-main">
        <a class="brand" href="#inicio" aria-label="Meu Manipulado — início">
          <img src="assets/home/capsula-digital-creme.svg" alt="" width="32" height="55">
          <span><b>meu<br>manipulado</b><small>SAÚDE PERSONALIZADA</small></span>
        </a>
        <form class="search" role="search" (submit)="submit($event, query.value)">
          <input pInputText #query type="search" aria-label="Buscar produtos" placeholder="Buscar produtos, fórmulas, ativos ou conteúdos..." [value]="searchQuery()" (input)="searchChange.emit(query.value)">
          <button type="submit" aria-label="Buscar"><svg aria-hidden="true"><use href="assets/home/interface.svg#search"/></svg></button>
        </form>
        <div class="header-actions">
          <button type="button" (click)="panel.emit('conta')"><svg aria-hidden="true"><use href="assets/home/interface.svg#user"/></svg><span>Entrar /<br>Criar conta</span></button>
          <button type="button" (click)="panel.emit('favoritos')"><svg aria-hidden="true"><use href="assets/home/interface.svg#heart"/></svg><span>Favoritos</span></button>
          <button type="button" (click)="panel.emit('carrinho')" [attr.aria-label]="'Carrinho, ' + cartCount() + ' itens'">
            <span class="cart-icon"><svg aria-hidden="true"><use href="assets/home/interface.svg#cart"/></svg><small>{{ cartCount() }}</small></span><span>Carrinho</span>
          </button>
        </div>
        <button class="mobile-menu" type="button" aria-label="Menu principal" aria-controls="menu-principal" [attr.aria-expanded]="menuOpen()" (click)="menuOpen.set(!menuOpen())">
          <svg aria-hidden="true"><use href="assets/home/interface.svg#menu"/></svg>
        </button>
      </div>
      <nav id="menu-principal" aria-label="Navegação principal" [class.open]="menuOpen()" (click)="menuOpen.set(false)">
        <a class="nav-current" href="#inicio">Início</a>
        <a href="#manipulados">Manipulados</a>
        <a href="#destaques" (click)="reset.emit()">Produtos</a>
        <a href="#categorias">Categorias <svg aria-hidden="true"><use href="assets/home/interface.svg#chevron"/></svg></a>
        <a href="#destaques" (click)="promotions.emit()">Promoções</a>
        <button type="button" (click)="panel.emit('conteudos')">Conteúdos</button>
        <button type="button" (click)="panel.emit('sobre')">Sobre Nós</button>
        <button type="button" (click)="panel.emit('contato')">Contato</button>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  readonly cartCount = input.required<number>();
  readonly searchQuery = input.required<string>();
  readonly searchChange = output<string>();
  readonly panel = output<DemoPanel>();
  readonly promotions = output<void>();
  readonly reset = output<void>();
  protected readonly menuOpen = signal(false);

  protected submit(event: Event, query: string) {
    event.preventDefault();
    this.searchChange.emit(query);
    document.getElementById('destaques')?.scrollIntoView();
  }
}
