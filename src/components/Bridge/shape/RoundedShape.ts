import { ButtonShape } from '../ButtonShape';

export class RoundedShape extends ButtonShape {
  getClasses(): string {
    return `rounded-pill ${this.color.getColorClass()}`;
  }
}