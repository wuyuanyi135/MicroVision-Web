import {
  AfterContentInit,
  AfterViewInit, ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResizeSensor} from 'css-element-queries';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Directive({
  selector: '[appSizeMatchSrc]',
})
export class SizeMatchSrcDirective implements OnDestroy {

  @Output() sizeChanged = new EventEmitter<ElementSize>();
  private sensor: any;

  constructor(private el: ElementRef) {
    const htmlElement = (el.nativeElement as HTMLElement);
    this.sensor = new ResizeSensor(htmlElement, () => {
      this.sizeChanged.emit({height: htmlElement.scrollHeight, width: htmlElement.scrollWidth});
    });
  }

  ngOnDestroy(): void {
    this.sensor.detach();
  }
}


@Directive({
  selector: '[appSizeMatchDest]'
})
export class SizeMatchDirective implements AfterContentInit, OnDestroy {
  private _matchWidth: boolean;
  @Input()
  get matchWidth() {
    return this._matchWidth;
  }

  set matchWidth(val: boolean) {
    this._matchWidth = coerceBooleanProperty(val);
  }

  private _matchHeight: boolean;
  @Input()
  get matchHeight() {
    return this._matchHeight;
  }

  set matchHeight(val: boolean) {
    this._matchHeight = coerceBooleanProperty(val);
  }

  @ContentChildren(SizeMatchSrcDirective)
  private src: QueryList<SizeMatchSrcDirective>;
  private subscription: Subscription;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    if (!this.src) {
      console.error(`sizeMatchDest must have a matching src in its children`);
      return;
    }
    if (this.src.length > 1) {
      console.warn(`Multiple sizeMatchDest found on ${this.el.nativeElement}, use the first one.`);
    }
    const src = this.src.first;
    const htmlElement = this.el.nativeElement as HTMLElement;
    this.subscription = src.sizeChanged.subscribe((size: ElementSize) => {
      if (this.matchHeight) {
        htmlElement.style.height = `${size.height}px`;
      }
      if (this.matchWidth) {
        htmlElement.style.width = `${size.width}px`;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

export interface ElementSize {
  height: number;
  width: number;
}

