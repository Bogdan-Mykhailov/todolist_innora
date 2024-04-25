module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-shadow": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    'space-in-parens': ['error', 'always'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
