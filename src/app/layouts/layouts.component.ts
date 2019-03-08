import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../sidenav.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  public sidenavOpenState = true;

  constructor(sidenavService: SidenavService) {
    sidenavService.onSidenavStateChanged().subscribe(value => this.sidenavOpenState = value);
  }

  ngOnInit() {
  }

}
