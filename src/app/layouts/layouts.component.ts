import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../sidenav.service';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  public sidenavOpenState = true;
  constructor(
    public sidenavService: SidenavService,
  ) {
  }

  ngOnInit() {
    // this.sidenavService.onSidenavStateChanged().subscribe(_value => this.sidenavOpenState = _value);
  }

}
