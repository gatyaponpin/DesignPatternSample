import type { ButtonColor } from '../ButtonColor';

export class BlueColor implements ButtonColor {
  getColorClass(): string {
    return 'bg-blue text-white';
  }
}