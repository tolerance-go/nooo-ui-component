import { Config } from '@stencil/core'

export const config: Config = {
   namespace: 'button',
   outputTargets: [
      {
         type: 'www',
         serviceWorker: null,
      },
      {
         type: 'docs-readme',
      },
      {
         type: 'dist',
      },
   ],
}
