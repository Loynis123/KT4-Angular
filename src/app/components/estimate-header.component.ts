import { Component } from '@angular/core';

@Component({
  selector: 'app-estimate-header',
  standalone: true,
  template: `<header>Get an Estimate for Workspace</header>`,
  styles: `
    :host { display: block; padding: calc(52 * var(--unit)) calc(94 * var(--unit)) 0; }
    header {
      display: flex; justify-content: center; align-items: center;
      height: calc(110 * var(--unit)); border-radius: calc(20 * var(--unit));
      border: 1px solid #f6f5f8; background: #fff;
      box-shadow: 0 calc(7 * var(--unit)) calc(16 * var(--unit)) #170f4909;
      font-size: calc(24 * var(--unit)); font-weight: 700;
    }
    @media (max-width: 599px) { :host { padding: 24px 20px 0; } header { font-size: 15px; height: 64px; } }
  `
})
export class EstimateHeaderComponent {}
