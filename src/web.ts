import { WebPlugin } from '@capacitor/core';

import type { RootCheckPluginPlugin, JailbreakRootResult } from './definitions';

export class RootCheckPluginWeb
  extends WebPlugin
  implements RootCheckPluginPlugin
{
  exitApp(): void {
    // Do Nothing
  }

  async isJailbrokenOrRooted(): Promise<JailbreakRootResult> {
    return {
      result: false,
    };
  }
  async isSimulator(): Promise<JailbreakRootResult> {
    return {
      result: false,
    };
  }
  async isDebuggedMode(): Promise<JailbreakRootResult> {
    return {
      result: false,
    };
  }
}
