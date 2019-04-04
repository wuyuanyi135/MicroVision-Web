import {Component, OnInit, ViewChild, Input, ElementRef, OnDestroy, HostListener, HostBinding, AfterViewInit} from '@angular/core';
import {IPreviewStream} from 'src/app/core/api/preview/preview';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  @ViewChild('imgRef')
  private imgRef: ElementRef;

  @Input()
  public previewStream: IPreviewStream;

  private imageUrl: SafeUrl;
  private subscription: Subscription;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.subscription = this.previewStream.stream.subscribe(value => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(value));
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  revoke(url: string) {
    URL.revokeObjectURL(url);
  }

  imageLoaded() {

    // this.imgHeight = this.imgRef.nativeElement.getBoundingClientRect().height;
    this.revoke(this.imgRef.nativeElement.currentSrc);
  }

}
