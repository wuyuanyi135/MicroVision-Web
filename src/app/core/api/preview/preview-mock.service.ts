import {IPreviewService, IPreviewStream } from './preview';
import {Observable, Subject} from 'rxjs';
import {Frame} from 'src/protogen/camera_definitions_pb';
import {HttpClient} from '@angular/common/http';
import {promisify} from 'es6-promisify';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';
import {Injectable} from '@angular/core';

export class MockPreviewStream implements IPreviewStream {
  readonly errorStream: Observable<Error>;
  readonly name: string;
  readonly ready: boolean;
  readonly stream: Observable<Blob>;

  protected mErrorStream: Subject<Error>;

  constructor(private http: HttpClient) {
    this.name = 'MockStream' + Math.floor(Math.random() * 100) + 1;
    this.ready = true;
    this.errorStream = this.mErrorStream = new Subject<Error>();
    this.stream = new Observable(subscriber => {
      const timer = setInterval(async () => {
        try {
          const data = await this.http.get('https://picsum.photos/800/600?random', {responseType: 'blob', observe: 'response'}).toPromise();
          // const im = new Image();
          // im.onload = ev => {
          //   // const canvas = document.createElement('canvas');
          //   // canvas.width = im.width;
          //   // canvas.height = im.height;
          //   // const context = canvas.getContext('2d');
          //   // context.drawImage(im, 0, 0);
          //   subscriber.next(context.getImageData(0, 0, im.width, im.height));
          // };
          // im.src = URL.createObjectURL(data);
          const dataType = data.headers.get('content-type');
          subscriber.next(new Blob([data.body], {type: dataType}));
        } catch (e) {
          this.mErrorStream.next(e);
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    });
  }
}
@Injectable()
export class PreviewMockService implements IPreviewService {
  previewStream: Array<IPreviewStream>;

  constructor(private http: HttpClient) {
    console.log('Mock Preview Service constructed!');
    this.previewStream = [
      new MockPreviewStream(http),
      new MockPreviewStream(http),
    ];
  }
}
