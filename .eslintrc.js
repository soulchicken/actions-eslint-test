module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb'],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': ['off'],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
        functions: 'defaultArguments',
      },
    ],
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
};
