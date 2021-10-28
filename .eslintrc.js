module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    indent: 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/display-name': 'off',
    // indent: [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     ignoredNodes: ['ConditionalExpression']
    //   }
    // ],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'multiline-ternary': ['off', 'always-multiline'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }]
  }
}
