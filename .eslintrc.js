module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/prefer-default-export": "off",
    "linebreak-style": 0,
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "explicitSpread": "ignore" | "enforce",
    "react/jsx-props-no-spreading": "off",
    'max-len': ["error", { "code": 160 }],
  },
};
