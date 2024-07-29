import { registerPlugin } from '@capacitor/core';

import type { RootCheckPluginPlugin } from './definitions';

const RootCheckPlugin = registerPlugin<RootCheckPluginPlugin>(
  'RootCheckPlugin',
  {
    web: () => import('./web').then(m => new m.RootCheckPluginWeb()),
  },
);

export * from './definitions';
export { RootCheckPlugin };
