import type { ButtonColor } from './ButtonColor';

export abstract class ButtonShape {
  constructor(protected color: ButtonColor) {}

  abstract getClasses(): string;
}