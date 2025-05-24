import plugin from 'eslint-plugin-mist3rbru'

export default [
  plugin.configs.react,
  plugin.configs.jest,
  {
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
]
