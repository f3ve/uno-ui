import { type Preset } from 'unocss';
import { colors } from 'unocss/preset-mini';
import { levels, types } from './utils';

export { generateVariants } from './utils';

export function presetUnoUI(): Preset {
  return {
    name: '@f3ve/uno-ui-preset',
    safelist: [
      // Create background classes
      ...types
        .map((t) =>
          levels.map((l) => [`bg-${t}-${l}`, `hover:bg-${t}-${l}`]).flat(),
        )
        .flat(),
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
