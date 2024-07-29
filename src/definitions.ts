export interface RootCheckPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
