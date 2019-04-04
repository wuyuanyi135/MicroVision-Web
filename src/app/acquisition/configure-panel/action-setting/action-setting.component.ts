import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-setting',
  templateUrl: './action-setting.component.html',
  styleUrls: ['./action-setting.component.scss']
})
export class ActionSettingComponent implements OnInit {
  public isRecording: boolean;

  constructor() { }

  ngOnInit() {
  }

}
