import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit,
  Renderer
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { TranslationManagerService } from 'src/app/common/translation/translation-manager.service';
import { LanguageType } from 'src/app/common/enums/languageType';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth-service.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  ngOnInit(): void {
  }
  pageName = "appLayout";
  pageApp = "app";
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

  constructor(
    private renderer: Renderer,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public trnsl: TranslationManagerService,
    private router: Router,
    private authSerivce: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  toggleMobileNav($event, nav: MatSidenav) {
    nav.toggle();
    $event.stopPropagation();
  }

  languageChange(value) {
    this.trnsl.currentLanguage = value;
    this.trnsl.page = this.trnsl.translations[this.trnsl.currentLanguage];
    if (LanguageType.english == value) {
      this.renderer.setElementClass(document.body, 'translate', false);
      this.renderer.setElementClass(document.body, 'nTranslate', true);
    } else {
      this.renderer.setElementClass(document.body, 'nTranslate', false);
      this.renderer.setElementClass(document.body, 'translate', true);
    }
  }

  logout() {
    this.authSerivce.logout();
    this.router.navigate(['/login']);
  }
}
