import {ApiMockModule} from '../app/core/api/api-mock.module';

export const environment = {
  production: false,
  hmr: true,
  VERSION: require('../../package.json').version,
  ApiModule:ApiMockModule,
};
