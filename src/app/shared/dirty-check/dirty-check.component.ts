import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dirty-check',
  standalone: true,
  imports: [CommonModule],
  template: `
    <code class="dirty-checks">({{ checked }})</code>
  `,
  styles: [`
    :host {
      display: inline-block;
      border-radius: 100%;
      border: 2px solid var(--palette-secondary-main);
      padding: 1rem;
      font-size: var(--text-lg);
    }
  `]
})
export class DirtyCheckComponent {

  private _checked = 0;

  get checked(): number {
    return this._checked++;
  }

}
