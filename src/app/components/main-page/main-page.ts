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

  static modulo(a, b) {
    return a % b;
  }

  static power(base, exponent) {
    return Math.pow(base, exponent);
  }

  static average(numbers = []) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
  }

  static max(numbers = []) {
    return Math.max(...numbers);
  }

  static min(numbers = []) {
    return Math.min(...numbers);
  }
}

// utils/logger.js
export class Logger {
  static info(message) {
    console.log('[INFO]', message);
  }

  static warn(message) {
    console.warn('[WARN]', message);
  }

  static error(message) {
    console.error('[ERROR]', message);
  }
}

// app.js
import { MathUtils } from './utils/math.js';
import { Logger } from './utils/logger.js';

function runDemo() {
  const values = [1, 2, 3, 4, 5];

  Logger.info('Starting math demo');

  Logger.info('Add: ' + MathUtils.add(2, 3));
  Logger.info('Subtract: ' + MathUtils.subtract(10, 4));
  Logger.info('Multiply: ' + MathUtils.multiply(6, 7));
  Logger.info('Divide: ' + MathUtils.divide(20, 5));
  Logger.info('Power: ' + MathUtils.power(2, 8));

  Logger.info('Average: ' + MathUtils.average(values));
  Logger.info('Max: ' + MathUtils.max(values));
  Logger.info('Min: ' + MathUtils.min(values));

  try {
    MathUtils.divide(5, 0);
  } catch (e) {
    Logger.error(e.message);
  }

  Logger.info('Demo finished');
}

runDemo();
`;


ngAfterViewInit() {
    Prism.highlightAll(); // 🔥 FORCE Prism to highlight
  }
}

