import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'stencil-library',
  minifyJs: true,
  minifyCss: true,
  plugins: [
    tailwind({
      tailwindCssPath: './src/styles/tailwind.css',
    }),
    tailwindHMR({
      tailwindCssPath: './src/styles/tailwind.css',
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@fdiskas/stencil-library',
      directivesProxyFile:
        '../angular-library/src/lib/stencil-generated/components.ts',
      outputType: 'standalone',
    }),
    vueOutputTarget({
      componentCorePackage: '@fdiskas/stencil-library',
      proxiesFile: '../vue-library/src/components.ts',
      includeImportCustomElements: true,
    }),
    reactOutputTarget({
      outDir: '../react-library/src/components/stencil-generated',
      stencilPackageName: '@fdiskas/stencil-library',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
      footer: '*Built with love! ❤️*',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
