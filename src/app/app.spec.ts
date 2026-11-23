import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Home Meu Manipulado', () => {
  function render() {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    return { fixture, page: fixture.nativeElement as HTMLElement };
  }

  it('renderiza a home com os cinco produtos demonstrativos sem configurar HTTP', () => {
    const { page } = render();
    expect(page.querySelector('#hero-title')?.textContent).toMatch(/Saúde\s*Personalizada\s*para você/);
    expect(page.querySelectorAll('.categories button').length).toBe(8);
    expect(page.querySelectorAll('article').length).toBe(5);
    expect(page.querySelector('.demo-label')?.textContent).toContain('demonstrativo');
  });

  it('encontra um produto mesmo quando a busca omite o acento', () => {
    const { page, fixture } = render();
    const search = page.querySelector<HTMLInputElement>('input[type="search"]')!;
    search.value = 'omega';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(page.querySelectorAll('article').length).toBe(1);
    expect(page.querySelector('article h3')?.textContent).toContain('Ômega 3');
  });

  it('atualiza o contador do carrinho e alterna o favorito', () => {
    const { page, fixture } = render();
    const favorite = page.querySelector<HTMLButtonElement>('.favorite')!;
    favorite.click();
    page.querySelector<HTMLButtonElement>('.add-cart')!.click();
    fixture.detectChanges();
    expect(favorite.getAttribute('aria-pressed')).toBe('true');
    expect(page.querySelector('.cart-icon small')?.textContent).toBe('1');
    favorite.click();
    fixture.detectChanges();
    expect(favorite.getAttribute('aria-pressed')).toBe('false');
  });

  it('usa os atalhos mobile para abrir o catálogo e a solicitação demonstrativa', () => {
    const { page, fixture } = render();
    const promotion = page.querySelector<HTMLAnchorElement>('.mobile-shortcuts a:nth-of-type(2)')!;
    promotion.addEventListener('click', event => event.preventDefault());
    promotion.click();
    fixture.detectChanges();
    expect(page.querySelectorAll('article').length).toBe(2);
    page.querySelector<HTMLButtonElement>('.mobile-formula')!.click();
    fixture.detectChanges();
    const dialog = page.querySelector<HTMLDialogElement>('dialog')!;
    expect(dialog.open).toBeTrue();
    expect(dialog.textContent).toContain('demonstra');
    dialog.close();
  });

  it('abre Pedidos pela barra inferior como demonstração', () => {
    const { page, fixture } = render();
    page.querySelector<HTMLButtonElement>('.mobile-navigation button:nth-of-type(2)')!.click();
    fixture.detectChanges();
    const dialog = page.querySelector<HTMLDialogElement>('dialog')!;
    expect(dialog.open).toBeTrue();
    expect(dialog.querySelector('h2')?.textContent).toBe('Pedidos');
    dialog.close();
  });
});
