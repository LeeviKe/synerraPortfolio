import { Component } from '@angular/core';
import * as Prism from 'prismjs';


@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
 codeBlock = `
// utils/math.js
export class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
}
`;

ngAfterViewInit() {
    Prism.highlightAll(); // 🔥 FORCE Prism to highlight
  }
}

