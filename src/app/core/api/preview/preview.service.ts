import {IPreviewService, IPreviewStream} from './preview';
import {Observable} from 'rxjs';
import {Frame} from 'src/protogen/camera_definitions_pb';

export class PreviewService implements IPreviewService {
  previewStream: Array<IPreviewStream>;
}
