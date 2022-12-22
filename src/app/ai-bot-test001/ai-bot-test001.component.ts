import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-bot-test001',
  template: `
    <div *ngFor="let product of products">
      {{ product.name }}
    </div>
  `,
})
export class AiBotTest001Component {
  products = [
    { name: 'Product 1' },
    { name: 'Product 2' },
    { name: 'Product 3' },
  ];
}

