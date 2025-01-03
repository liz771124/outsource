// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 官方建議規範
    'plugin:vue/vue3-recommended', // Vue3 官方建議規範
    'plugin:prettier/recommended' // 整合 Prettier 到 ESLint
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 關閉組件命名規則
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
};
