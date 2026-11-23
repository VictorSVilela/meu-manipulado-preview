import { Component, output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero-banner',
  imports: [ButtonModule],
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-inner">
        <img class="hero-art" src="assets/home/hero.png" alt="" width="710" height="325" fetchpriority="high">
        <div class="hero-copy">
          <h1 id="hero-title">{{ slides[slide()].first }}<br><strong>{{ slides[slide()].emphasis }}</strong><br>{{ slides[slide()].last }}</h1>
          <p>Fórmulas manipuladas com<br> qualidade, segurança e<br> acompanhamento profissional.</p>
          <div class="hero-actions">
            <button pButton type="button" class="pill light" (click)="requestForm.emit()">
              <img src="assets/home/capsula-digital-vinho-principal.svg" alt="" width="22" height="31"> Solicitar Manipulado <svg aria-hidden="true"><use href="assets/home/interface.svg#arrow"/></svg>
            </button>
            <a pButton class="pill ghost" href="#destaques">Conhecer Produtos</a>
          </div>
        </div>
        <ul class="benefits" aria-label="Benefícios">
          @for (benefit of benefits; track benefit.title; let i = $index) {
            <li><span class="prototype-icon" [style.--icon-offset.px]="-(i + 8) * 48" aria-hidden="true"></span><div><strong>{{ benefit.title }}</strong><br>{{ benefit.description }}</div></li>
          }
        </ul>
        <div class="hero-dots" aria-label="Destaques do banner">
          @for (item of slides; track item.emphasis; let i = $index) {
            <button type="button" [attr.aria-label]="item.emphasis" [attr.aria-pressed]="slide() === i" (click)="slide.set(i)"></button>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroBannerComponent {
  readonly requestForm = output<void>();
  protected readonly slide = signal(0);
  protected readonly slides = [
    { first: 'Saúde', emphasis: 'Personalizada', last: 'para você' },
    { first: 'Fórmulas', emphasis: 'Manipuladas', last: 'para você' },
    { first: 'Cuidado e', emphasis: 'Orientação', last: 'profissional' },
  ];
  protected readonly benefits = [
    { title: 'Qualidade e segurança', description: 'Fórmulas com controle rigoroso' },
    { title: 'Acompanhamento farmacêutico', description: 'Orientação em todas as etapas' },
    { title: 'Entrega rápida e segura', description: 'Para todo o Brasil' },
    { title: 'Fórmulas personalizadas', description: 'Para as suas necessidades' },
  ];
}
