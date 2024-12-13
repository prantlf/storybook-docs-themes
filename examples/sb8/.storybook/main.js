import { configureSort } from 'storybook-multilevel-sort'

configureSort({
  storyOrder: {
    '**': { default: null }
  }
})

export default {
  stories: [
    '../stories'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/html-vite'
  },
  staticDirs: [
    { from: '../node_modules/storybook-docs-themes/stylesheets', to: 'themes' }
  ],
  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  },
  core: {
    disableTelemetry: true
  }
}
