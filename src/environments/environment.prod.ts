import {DatasourceModule} from '../app/datasource/datasource.module';

export const environment = {
  production: true,
  hmr: false,
  VERSION: require('../../package.json').version,
  DataSourceModule: DatasourceModule,
};
