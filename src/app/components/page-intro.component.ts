import { Component } from '@angular/core';

@Component({
  selector: 'app-page-intro',
  standalone: true,
  template: `
    <section aria-labelledby="page-title">
      <h1 id="page-title">Post Your Requirements</h1>
      <p>Please fill the form below to receive a quote for workspace.<br>Please add all the details required.</p>
    </section>
  `,
  styles: `
    :host { display: block; margin-top: calc(110 * var(--unit)); text-align: center; }
    h1 { font-size: calc(34 * var(--unit)); line-height: calc(44 * var(--unit)); font-weight: 700; margin: 0; }
    p { margin: calc(10 * var(--unit)) 16px 0; color: var(--muted); font-size: calc(18 * var(--unit)); line-height: calc(30 * var(--unit)); }
    @media (max-width: 599px) { :host { margin-top: 52px; } h1 { font-size: 25px; } p { font-size: 12px; line-height: 22px; } }
  `
})
export class PageIntroComponent {}
