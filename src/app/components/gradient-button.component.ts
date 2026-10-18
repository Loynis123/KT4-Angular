import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  standalone: true,
  template: `<button [type]="type" (click)="pressed.emit()">{{ text }}</button>`,
  styles: `
    :host { display: inline-block; }
    button {
      display: block; width: calc(170 * var(--unit)); height: calc(60 * var(--unit));
      border: 0; border-radius: calc(40 * var(--unit)); cursor: pointer;
      color: #fff; background: linear-gradient(180deg, #a88aff 0%, #db48f0 65%, #ee25ed 100%);
      box-shadow: 0 calc(5 * var(--unit)) calc(8 * var(--unit)) #b52bd529;
      font-weight: 700; font-size: calc(24 * var(--unit));
    }
    button:hover { filter: brightness(1.04); }
    button:active { transform: translateY(1px); }
    @media (max-width: 599px) { button { width: 130px; height: 46px; font-size: 18px; } }
  `
})
export class GradientButtonComponent {
  @Input() text = 'Submit';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() pressed = new EventEmitter<void>();
}
