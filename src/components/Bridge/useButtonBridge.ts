import { RedColor } from './color/RedColor';
import { BlueColor } from './color/BlueColor';
import { RoundedShape } from './shape/RoundedShape';
import { SquareShape } from './shape/SquareShape';
import type { ButtonShape } from './ButtonShape';

export function useButtonBridge(): { buttons: { label: string; shape: ButtonShape }[] } {
  return {
    buttons: [
      { label: '丸 × 赤', shape: new RoundedShape(new RedColor()) },
      { label: '丸 × 青', shape: new RoundedShape(new BlueColor()) },
      { label: '角 × 赤', shape: new SquareShape(new RedColor()) },
      { label: '角 × 青', shape: new SquareShape(new BlueColor()) }
    ]
  };
}