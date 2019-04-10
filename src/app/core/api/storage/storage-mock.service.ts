import {IStorageService, StorageInfo} from './storage';
import {Observable} from 'rxjs';
import * as faker from 'faker';
import {SNACK_DELAY} from '../../constants';

export class StorageMockService implements IStorageService {
  storageStream: Observable<StorageInfo>;

  getStorage(): StorageInfo {
    const GB = 1024 * 1024 * 1024;
    const MB = 1024 * 1024;
    const available = faker.random.number({min: GB, max: 10 * GB, precision: MB});
    return {
      available,
      used: faker.random.number({min: 0, max: available, precision: MB}),
    };
  }

  constructor() {
    this.storageStream = new Observable(subscriber => {
      subscriber.next(this.getStorage());
      const timer = setInterval(() => subscriber.next(this.getStorage()), SNACK_DELAY);
      return () => {
        clearInterval(timer);
      };
    });
  }
}
