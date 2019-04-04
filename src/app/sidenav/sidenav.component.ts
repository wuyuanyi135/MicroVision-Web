import { Component, OnInit } from '@angular/core';
import {dashboardPages} from '../dashboard.pages';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public pagesList = dashboardPages;
  public version = environment.VERSION;

  constructor() {
  }

  ngOnInit() {

  }

}
