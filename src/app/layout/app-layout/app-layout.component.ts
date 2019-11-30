import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'Gujjar Dairy';
  mobileQuery: MediaQueryList;
  nav = [
    // {
    //   'title': 'dashboard',
    //   'path': '/dashboard'
    // },

    // {
    //   'title': 'login',
    //   'path': '/login'
    // },
    // {
    //   'title': 'signup',
    //   'path': '/signup'
    // },
  ];

  items = [
    // {
    //   'title': 'Milk',
    //   'path': '/dashboard'
    // },
    // {
    //   'title': 'Yogurt',
    //   'path': '/login'
    // }
  ];
  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();
  
  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}
