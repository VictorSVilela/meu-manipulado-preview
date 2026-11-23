import { Component, computed, signal } from '@angular/core';
import { CategoriesComponent } from './home/categories';
import { products } from './home/catalog';
import { FeaturedProductsComponent } from './home/featured-products';
import { DemoPanel, HeaderComponent } from './home/header';
import { HeroBannerComponent } from './home/hero-banner';
import { ManipulationBannerComponent } from './home/manipulation-banner';

const panelDetails: Record<DemoPanel, { title: string; text: string }> = {
  conta: { title: 'Entrar / Criar conta', text: 'A área de conta está disponível apenas para demonstração.' },
  favoritos: { title: 'Favoritos', text: 'Produtos marcados nesta demonstração.' },
  carrinho: { title: 'Carrinho demonstrativo', text: 'Os itens abaixo foram adicionados apenas à demonstração.' },
  solicitacao: { title: 'Solicitar Manipulado', text: 'Esta ação demonstra o acesso à solicitação de fórmulas. O envio de receitas e dados pessoais ainda está indisponível.' },
  conteudos: { title: 'Conteúdos', text: 'Os conteúdos da loja serão publicados aqui.' },
  sobre: { title: 'Sobre o Meu Manipulado', text: 'Esta é uma demonstração da loja Meu Manipulado.' },
  contato: { title: 'Contato', text: 'O canal de atendimento será disponibilizado aqui.' },
};

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroBannerComponent, CategoriesComponent, FeaturedProductsComponent, ManipulationBannerComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly query = signal('');
  protected readonly category = signal<string | null>(null);
  protected readonly promotionsOnly = signal(false);
  protected readonly favorites = signal<readonly string[]>([]);
  protected readonly cart = signal<Readonly<Record<string, number>>>({});
  protected readonly cartCount = computed(() => Object.values(this.cart()).reduce((total, quantity) => total + quantity, 0));
  protected readonly cartProducts = computed(() => products.filter(({ id }) => this.cart()[id]));
  protected readonly favoriteProducts = computed(() => products.filter(({ id }) => this.favorites().includes(id)));
  protected readonly panel = signal<DemoPanel>('conta');
  protected readonly panelDetails = computed(() => panelDetails[this.panel()]);
  protected readonly shownProducts = computed(() => {
    const query = this.normalize(this.query().trim());
    return products.filter(product =>
      (!this.category() || this.category() === product.category) &&
      (!this.promotionsOnly() || product.previousPrice) &&
      this.normalize(`${product.name} ${product.description} ${product.category}`).includes(query),
    );
  });

  protected search(query: string) {
    this.resetFilters();
    this.query.set(query);
  }

  protected selectCategory(category: string) {
    const nextCategory = this.category() === category ? null : category;
    this.resetFilters();
    this.category.set(nextCategory);
    document.getElementById('destaques')?.scrollIntoView();
  }

  protected resetFilters() {
    this.query.set('');
    this.category.set(null);
    this.promotionsOnly.set(false);
  }

  protected showPromotions() {
    this.resetFilters();
    this.promotionsOnly.set(true);
  }

  protected toggleFavorite(id: string) {
    this.favorites.update(ids => ids.includes(id) ? ids.filter(item => item !== id) : [...ids, id]);
  }

  protected addToCart(id: string) {
    this.cart.update(cart => ({ ...cart, [id]: (cart[id] ?? 0) + 1 }));
  }

  protected openPanel(dialog: HTMLDialogElement, panel: DemoPanel) {
    this.panel.set(panel);
    dialog.showModal();
  }

  private normalize(value: string) {
    return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  }
}
