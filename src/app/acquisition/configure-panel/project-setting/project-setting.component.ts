import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  constructor() { }

  @Input() locked = false;
  ngOnInit() {
  }

}
