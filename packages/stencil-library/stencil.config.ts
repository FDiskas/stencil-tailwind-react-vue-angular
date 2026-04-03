import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: '@mediq/stencil-library',
      proxiesFile: '../vue-library/src/components.ts',
      includeImportCustomElements: true,
    }),
    reactOutputTarget({
      outDir: '../react-library/src/components/stencil-generated',
      stencilPackageName: '@mediq/stencil-library',
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
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
