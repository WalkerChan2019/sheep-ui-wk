module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // "eslint:recommended", // 会导致 报错：module is not defined
    // 'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },

  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // quotes: ['error', 'double'],
    // semi: [2, 'always'], // 语句强制分号结尾
    // '@typescript-eslint/no-var-requires': 0
    '@typescript-eslint/no-unused-vars': 0
  }
}
