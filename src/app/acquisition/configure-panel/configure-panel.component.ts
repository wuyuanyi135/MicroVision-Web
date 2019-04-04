import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-configure-panel',
  templateUrl: './configure-panel.component.html',
  styleUrls: ['./configure-panel.component.scss']
})
export class ConfigurePanelComponent implements OnInit, OnDestroy {
  layout: string;
  private mediaObserverSubscription: Subscription;

  constructor(private mediaObserver: MediaObserver) {
  }

  ngOnInit() {
    this.mediaObserverSubscription = this.mediaObserver.media$.subscribe(
      value => this.layout = this.mediaObserver.isActive('gt-sm') ? 'column' : 'row'
    );
  }

  ngOnDestroy(): void {
    if (this.mediaObserverSubscription) {
      this.mediaObserverSubscription.unsubscribe();
    }
  }

}
