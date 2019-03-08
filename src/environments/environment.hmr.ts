import {DatasourceModule} from '../app/datasource/datasource.module';

export const environment = {
  production: false,
  hmr: true,
  VERSION: require('../../package.json').version,
  DataSourceModule: DatasourceModule,
};
