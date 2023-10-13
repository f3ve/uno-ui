import { type Preset } from 'unocss';
import { colors } from 'unocss/preset-mini';

const types = [
  'primary',
  'secondary',
  'accent',
  'error',
  'success',
  'warning',
  'info',
];

const levels = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
];

export function presetUnoUI(): Preset {
  return {
    name: '@f3ve/uno-ui-preset',
    safelist: [
      // Create background classes
      ...types.map((t) => levels.map((l) => `bg-${t}-${l}`)).flat(),
    ],
    theme: {
      colors: {
        primary: colors.indigo,
        secondary: colors.teal,
        accent: colors.orange,
        error: colors.red,
        success: colors.green,
        warning: colors.yellow,
        info: colors.blue,
      },
    },
  };
}
