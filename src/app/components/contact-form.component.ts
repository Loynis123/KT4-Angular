import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from './form-field.component';
import { GradientButtonComponent } from './gradient-button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent, GradientButtonComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <section class="card" aria-labelledby="contact-heading">
        <header>
          <h2 id="contact-heading">Contact details</h2>
          <p>Please fill your information so we can get in touch with you.</p>
        </header>
        <div class="divider"></div>
        <div class="fields">
          <app-form-field controlId="name" label="Name" type="text" placeholder="Your Name"
            autocomplete="name" [control]="form.controls.name" (edited)="submitted.set(false)" />
          <app-form-field controlId="phone" label="Phone Number" type="tel" placeholder="(123) 456 - 7890"
            autocomplete="tel" [control]="form.controls.phone" errorText="Please enter a valid phone number."
            (edited)="submitted.set(false)" />
          <app-form-field controlId="email" label="Email" type="email" placeholder="Your Mail ID"
            autocomplete="email" [control]="form.controls.email" errorText="Please enter a valid email address."
            (edited)="submitted.set(false)" />
          <app-form-field controlId="date" label="Date" type="date" placeholder="dd - mm - yyyy"
            [control]="form.controls.date" (edited)="submitted.set(false)" />
        </div>
      </section>
      <div class="submit-row">
        <app-gradient-button text="Submit" type="submit" (pressed)="submitted.set(false)" />
      </div>
      @if (submitted()) {
        <p class="feedback" role="status">Thank you! Your details are ready.</p>
      }
    </form>
  `,
  styles: `
    :host { display: block; margin-top: calc(56 * var(--unit)); }
    form { margin: 0; }
    .card {
      width: calc(700 * var(--unit)); min-height: calc(810 * var(--unit)); margin: auto;
      padding-top: calc(26 * var(--unit)); padding-bottom: calc(90 * var(--unit));
      background: #faf8f8; border: 1px solid #f0edf3; border-radius: calc(34 * var(--unit));
      box-shadow: 0 calc(6 * var(--unit)) calc(12 * var(--unit)) #170f4909;
    }
    header { margin: 0 calc(64 * var(--unit)); }
    h2 { margin: 0; font-size: calc(24 * var(--unit)); line-height: calc(34 * var(--unit)); font-weight: 700; }
    header p { margin: calc(4 * var(--unit)) 0 0; font-size: calc(18 * var(--unit)); line-height: calc(30 * var(--unit)); color: var(--muted); white-space: nowrap; }
    .divider { height: 1px; background: #dcdbea; margin: calc(14 * var(--unit)) calc(56 * var(--unit)) 0 calc(48 * var(--unit)); }
    .fields { display: grid; gap: calc(48 * var(--unit)); margin: calc(46 * var(--unit)) calc(64 * var(--unit)) 0; }
    .submit-row { display: flex; justify-content: center; margin-top: calc(48 * var(--unit)); }
    .feedback { text-align: center; font-size: calc(18 * var(--unit)); color: var(--muted); margin: 16px; }
    @media (max-width: 599px) {
      :host { margin-top: 32px; padding-bottom: 48px; }
      .card { width: calc(100% - 40px); max-width: 420px; min-height: 0; padding: 24px 0 32px; border-radius: 24px; }
      header { margin: 0 24px; } h2 { font-size: 20px; line-height: 28px; }
      header p { font-size: 12px; line-height: 20px; white-space: normal; }
      .divider { margin: 16px 24px 0; }
      .fields { margin: 26px 24px 0; gap: 24px; }
      .submit-row { margin-top: 26px; }
      .feedback { font-size: 13px; }
    }
  `
})
export class ContactFormComponent {
  readonly submitted = signal(false);
  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/.*\S.*/)] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[+()\d\s-]{7,20}$/)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    date: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  submit(): void {
    this.submitted.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.getRawValue());
    this.submitted.set(true);
  }
}
