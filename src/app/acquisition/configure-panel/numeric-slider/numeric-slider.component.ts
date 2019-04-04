import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSlider, MatSliderChange} from '@angular/material';
import {Observer} from 'rxjs';

@Component({
  selector: 'app-numeric-slider',
  templateUrl: './numeric-slider.component.html',
  styleUrls: ['./numeric-slider.component.scss']
})
export class NumericSliderComponent implements OnInit {

  constructor() { }
  @Input() min: number;
  @Input() max: number;
  @Input() tick: number;

  private mValue: number;
  @Output() valueChange = new EventEmitter();
  @Input()
  get value() {
    return this.mValue;
  }
  set value(v) {
    this.mValue = v;
    this.valueChange.emit(this.mValue);
  }

  sliderChanged(value: number) {
    this.updateValue(value);
  }

  ngOnInit() {
    this.value = this.min;
    if (!this.tick) { this.tick = 1; }
  }

  detectEnter($event: KeyboardEvent) {
    if ($event.keyCode === 13) {
      this.updateFromInput($event);
    }
  }

  updateFromInput($event: Event) {
    const newValue = parseFloat(($event.target as HTMLInputElement).value);
    if (!this.updateValue(newValue)) {
      ($event.target as HTMLInputElement).value = this.value.toString();
    }
  }

  btnValueAdjustment(val: number) {
    this.updateValue(this.value + val);
  }

  updateValue(newValue: number): boolean {
    const oldValue = this.value;
    if (newValue > this.max) {
      this.value = this.max;
    } else if (newValue < this.min) {
      this.value = this.min;
    } else {
      this.value = newValue;
    }
    return oldValue !== this.value;
  }
}
