import { Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-manipulation-banner',
  imports: [ButtonModule],
  template: `
    <section id="manipulados" class="formula-banner" aria-labelledby="formula-title">
      <div class="formula-copy">
        <p>Precisa de uma fórmula específica?</p>
        <h2 id="formula-title">Solicite seu Manipulado</h2>
        <p>Envie sua receita ou descreva sua necessidade e receba um atendimento personalizado da nossa equipe farmacêutica.</p>
      </div>
      <button pButton class="pill" type="button" (click)="requestForm.emit()">
        <img src="assets/home/capsula-digital-creme.svg" alt="" width="22" height="31"> Solicitar Manipulado <svg aria-hidden="true"><use href="assets/home/interface.svg#arrow"/></svg>
      </button>
    </section>
  `,
})
export class ManipulationBannerComponent {
  readonly requestForm = output<void>();
}
