import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CgiService {
  public cgiUrl: string;
  constructor() {
    this.cgiUrl = window.location.origin;
  }
}
