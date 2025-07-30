module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  "overrides": [
    {
      "files": ["**/*.ts"],
      "rules": {
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "no-empty-function": "off", // 追加
        "@typescript-eslint/no-empty-function": "error" // 追加
      }
    }
  ]
}
