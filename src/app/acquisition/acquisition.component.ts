import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {IPreviewService, PREVIEW_SERVICE} from '../core/api/preview/preview';
import {MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {IResizeEvent} from 'angular2-draggable/lib/models/resize-event';

@Component({
  selector: 'app-acquisition',
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.scss']
})
export class AcquisitionComponent implements OnInit, OnDestroy {
  smallScreen: boolean;
  private subscription: Subscription;
  private toggleConfigurePanel = false;
  get showConfigurePanel(): boolean {
    return (!this.smallScreen) || this.toggleConfigurePanel;
  }

  constructor(@Inject(PREVIEW_SERVICE) public previewService: IPreviewService, private mediaObserver: MediaObserver) {
  }

  ngOnInit() {
    this.subscription = this.mediaObserver.media$.subscribe(
      value => this.smallScreen = this.mediaObserver.isActive('lt-sm')
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  dbClickToggleState() {
    this.toggleConfigurePanel = !this.toggleConfigurePanel;
  }
}
