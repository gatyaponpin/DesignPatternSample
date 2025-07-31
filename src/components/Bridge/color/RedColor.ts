import type { ButtonColor } from '../ButtonColor';

export class RedColor implements ButtonColor {
  getColorClass(): string {
    return 'bg-red text-white';
  }
}