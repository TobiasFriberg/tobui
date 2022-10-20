import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {},
    specPattern: 'components/**/*.test.{js,ts,jsx,tsx}',
  },
});
