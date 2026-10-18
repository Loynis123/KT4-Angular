import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <label [for]="controlId">{{ label }}</label>
    <div class="input-wrap">
      <input [id]="controlId" [type]="type" [placeholder]="placeholder"
        [autocomplete]="autocomplete" [formControl]="control" required
        [class.empty-date]="type === 'date' && !control.value"
        [class.invalid]="control.invalid && control.touched"
        [attr.aria-invalid]="control.invalid && control.touched"
        [attr.aria-describedby]="control.invalid && control.touched ? controlId + '-error' : null"
        (input)="edited.emit(control.value)">
      @if (type === 'date' && !control.value) {
        <span class="date-placeholder" aria-hidden="true">{{ placeholder }}</span>
      }
    </div>
    @if (control.invalid && control.touched) {
      <small [id]="controlId + '-error'">{{ errorText }}</small>
    }
  `,
  styles: `
    :host { display: block; position: relative; }
    label { display: block; font-size: calc(18 * var(--unit)); line-height: calc(24 * var(--unit)); margin-bottom: calc(14 * var(--unit)); font-weight: 500; }
    .input-wrap { position: relative; width: calc(284 * var(--unit)); }
    input {
      display: block; width: 100%; height: calc(66 * var(--unit));
      padding: 0 calc(20 * var(--unit)); background: #fff; color: var(--ink);
      border: 1px solid #efedf4; border-radius: calc(40 * var(--unit));
      box-shadow: 0 calc(3 * var(--unit)) calc(5 * var(--unit)) #170f4908;
      font-size: calc(18 * var(--unit)); min-width: 0;
    }
    input::placeholder { color: var(--muted); opacity: 1; }
    input.empty-date:not(:focus) { color: transparent; }
    input[type=date]::-webkit-calendar-picker-indicator { opacity: 0; cursor: pointer; }
    input[type=date]:focus::-webkit-calendar-picker-indicator { opacity: .5; }
    .date-placeholder { position: absolute; top: 50%; left: calc(24 * var(--unit)); transform: translateY(-50%); color: var(--muted); font-size: calc(18 * var(--unit)); pointer-events: none; }
    input:focus + .date-placeholder { display: none; }
    input.invalid { border-color: #c43c66; }
    small { display: block; color: #b32650; font-size: calc(14 * var(--unit)); margin-top: 5px; }
    @media (max-width: 599px) { label { font-size: 14px; } .input-wrap { width: 100%; } input { height: 48px; font-size: 14px; } .date-placeholder { font-size: 14px; } small { font-size: 12px; } }
  `
})
export class FormFieldComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) controlId!: string;
  @Input({ required: true }) label!: string;
  @Input() type: 'text' | 'tel' | 'email' | 'date' = 'text';
  @Input() placeholder = '';
  @Input() autocomplete = 'off';
  @Input() errorText = 'Please complete this field.';
  @Output() edited = new EventEmitter<string>();
}
