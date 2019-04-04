import {ApiModule} from 'src/app/core/api/api.module';

export const environment = {
  production: false,
  hmr: true,
  VERSION: require('../../package.json').version,
  ApiModule,
};
