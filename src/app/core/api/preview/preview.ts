import {Frame} from 'src/protogen/camera_definitions_pb';
import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface IPreviewStream {
  readonly stream: Observable<Blob>;
  readonly errorStream: Observable<Error>;
  readonly name: string;
  readonly ready: boolean;
}
export interface IPreviewService {
  previewStream: Array<IPreviewStream>;
}
export const PREVIEW_SERVICE = new InjectionToken<IPreviewService>('PREVIEW_SERVICE');
