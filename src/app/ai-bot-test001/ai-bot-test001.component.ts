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
    { name: 'Student 1' },
    { name: 'Student 2' },
    { name: 'Student 3' },
  ];
}

