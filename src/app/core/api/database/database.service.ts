import { HistoryOverviewData, IDatabaseService, SavedImage} from './database';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DatabaseService implements IDatabaseService {

  cacheUpdated: Observable<HistoryOverviewData[]>;

  deleteProject(id: string): Promise<boolean> {
    return undefined;
  }

  downloadProject(id: string): Promise<boolean> {
    return undefined;
  }

  getSavedImages(opts: { id: string; offset?: number; length?: number }): Promise<SavedImage[]> {
    return undefined;
  }

  updateProjectName(id: string, newName: string): Promise<boolean> {
    return undefined;
  }

  getOverviewData(opts?: { offset?: number; length?: number }): Promise<HistoryOverviewData[]> {
    return undefined;
  }

}
