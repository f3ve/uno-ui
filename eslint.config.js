import f3veEslintConfig from '@f3ve/eslint-config';

export default [
  ...f3veEslintConfig({
    typescript: true,
    browser: true,
    vue: true,
    node: true,
    prettier: true,
  }),
];
