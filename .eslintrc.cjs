module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1 }
    ],
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
      { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'max-len': [
      'error',
      { 'code': 80 },
      { 'tabWidth': 2 }
    ],
    'react-refresh/only-export-components': 'warn',
  },
}
