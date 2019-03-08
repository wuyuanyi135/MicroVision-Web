import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private sidenavService: SidenavService;

  constructor(sidenavService: SidenavService) {
    this.sidenavService = sidenavService;
  }

  public toggleMenu() {
    this.sidenavService.toggle();
  }

  ngOnInit() {
  }

}
