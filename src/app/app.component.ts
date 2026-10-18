import { Component } from '@angular/core';
import { EstimateHeaderComponent } from './components/estimate-header.component';
import { PageIntroComponent } from './components/page-intro.component';
import { ContactFormComponent } from './components/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EstimateHeaderComponent, PageIntroComponent, ContactFormComponent],
  template: `
    <app-estimate-header />
    <main>
      <app-page-intro />
      <app-contact-form />
    </main>
  `
})
export class AppComponent {}
