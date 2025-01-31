import {
  Configuration as DevServerConfiguration,
  Port,
} from 'webpack-dev-server';

export function buildDevServer(port: Port): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
