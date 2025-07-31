import { ButtonShape } from '../ButtonShape';

export class SquareShape extends ButtonShape {
  getClasses(): string {
    return `rounded-0 ${this.color.getColorClass()}`;
  }
}