import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  showHeader: boolean = false;
  constructor(private route:Router) {

    this.route.events.subscribe((event)=>{
        if(event instanceof NavigationEnd) {
          if (this.route.url === '/login') {
            this.showHeader = false;
          } else {
            this.showHeader = true;
          }
        }
    })
  }

  
}
