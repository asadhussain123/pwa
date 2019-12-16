import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationManagerService } from '../common/translation/translation-manager.service';
@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.scss']
})
export class ThankyoupageComponent implements OnInit {
  pageName = "thankyouPage"
  constructor(private route: Router, public trnsl: TranslationManagerService,) { }

  ngOnInit() {
  }

  routeToLogin() {
    this.route.navigate(['/login']);
  }

}
