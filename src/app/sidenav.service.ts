import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MediaObserver} from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public sidenavOpened = true;
  public isSmallScreen = false;

  public open() {
    this.sidenavOpened = true;
  }

  public close() {
    this.sidenavOpened = false;
  }

  public toggle() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  constructor(mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe(mq => {
      if (mediaObserver.isActive('gt-sm')) {
        this.open();
        this.isSmallScreen = false;
      } else {
        this.close();
        this.isSmallScreen = true;
      }
    });
  }
}
