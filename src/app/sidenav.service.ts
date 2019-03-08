import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MediaObserver} from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavOpened = true;
  private sidenavObservable: BehaviorSubject<boolean> = new BehaviorSubject(this.sidenavOpened);

  public open() {
    this.sidenavOpened = true;
    this.notifySidenavStateChanged();
  }

  public close() {
    this.sidenavOpened = false;
    this.notifySidenavStateChanged();
  }

  public toggle() {
    this.sidenavOpened = !this.sidenavOpened;
    this.notifySidenavStateChanged();
  }

  private notifySidenavStateChanged() {
    this.sidenavObservable.next(this.sidenavOpened);
  }

  public onSidenavStateChanged(): Observable<boolean> {
    return this.sidenavObservable;
  }

  constructor(mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe(mq => {
      if (mediaObserver.isActive('gt-sm')) {
        this.open();
      } else {
        this.close();
      }
    });
  }
}
