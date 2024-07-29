import { WebPlugin } from '@capacitor/core';

import type { RootCheckPluginPlugin } from './definitions';

export class RootCheckPluginWeb
  extends WebPlugin
  implements RootCheckPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
