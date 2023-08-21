import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
    },
    // reactOutputTarget({
    //   componentCorePackage: 'stencil-components',
    //   proxiesFile: './lib/components/stencil-generated/index.ts',
    // }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
