import {ApiModule} from 'src/app/core/api/api.module';

export const environment = {
  production: true,
  hmr: false,
  VERSION: require('../../package.json').version,
  ApiModule,
};
