import {DatasourceMockModule} from 'src/app/datasource/datasource.mock.module';

export const environment = {
  production: false,
  hmr: true,
  VERSION: require('../../package.json').version,
  DataSourceModule: DatasourceMockModule,
};
