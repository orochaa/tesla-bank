import plugin from 'eslint-plugin-mist3rbru'

export default [
  plugin.configs.react,
  plugin.configs.jest,
  {
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      '@stylistic/padding-line-between-statements': 'off',
    },
  },
]
