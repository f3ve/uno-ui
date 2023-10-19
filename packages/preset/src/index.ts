import { type Preset } from 'unocss';
import { colors } from 'unocss/preset-mini';
import { types } from './utils';

export { generateVariants } from './utils';

export function presetUnoUI(): Preset {
  return {
    name: '@f3ve/uno-ui-preset',
    safelist: [
      // create button types
      ...types.map((t) => `u-btn-${t}`),

      // Create line types
      ...types.map((t) => `u-line-${t}`),
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
        default: colors.gray,
      },
    },
    shortcuts: [
      [/^u-btn-([\w]+$)/, ([, type]) => `bg-${type}-500`],
      [/^u-line-([\w]+$)/, ([, type]) => `bg-${type}-500`],
      {
        'u-line': 'transition-width duration-300 ease-in-out',
        hoverable: 'transition-shadow @hover:bg-lighten',
        'u-btn': 'text-white rounded px-4 py-2 hoverable',
        'u-btn-underlined': 'text-black rounded px-4 py-2 hoverable',
      },
    ],
    rules: [
      [
        'bg-lighten',
        {
          '-moz-box-shadow': 'inset 0 0 100px 100px rgba(151, 151, 151, 0.25)',
          '-webkit-box-shadow':
            'inset 0 0 100px 100px rgba(151, 151, 151, 0.25)',
          boxShadow: 'inset 0 0 100px 100px rgba(151, 151, 151, 0.25)',
        },
      ],
    ],
  };
}
