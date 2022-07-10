module.exports = {
  extends: '@alicevia',
  rules: {
    camelcase: 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-setup-props-destructure': 'off'

  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }

}
