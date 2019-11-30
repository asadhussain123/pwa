import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.listenForAppUpdate();
  }

  constructor(private swUpdate: SwUpdate) {
  }

  listenForAppUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(async () => {
        var txt = confirm("Newer version of the app is available. It's a quick refresh away!");
        if (txt == true) {
          window.location.reload();
        }
      });
    }
  }

}
