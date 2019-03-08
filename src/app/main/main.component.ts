import { Component, OnInit, Inject } from '@angular/core';
import {IPreviewService, PREVIEW_SERVICE} from '../datasource/preview/preview';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
