import Color from 'color';

export const types = [
  'primary',
  'secondary',
  'accent',
  'error',
  'success',
  'warning',
  'info',
  'default',
];

export const levels = [50, 100, 200, 30, 400, 500, 600, 700, 800, 900, 950];

type ColorObject = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export function generateVariants(hex: string): ColorObject {
  const color = new Color(hex, 'hex');

  const colorObj: Partial<ColorObject> = {};

  levels.forEach((l) => {
    const key = l as keyof typeof colorObj;
    if (key < 500) {
      colorObj[key] = color.lighten(1 - l / 500).hex();
    } else if (key > 500) {
      colorObj[key] = color.darken(1 - 500 / l).hex();
    } else {
      colorObj[key] = hex;
    }
  });

  return colorObj as ColorObject;
}
