import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-vdc-photography';
  isMobile : boolean;

  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.isMobile = true;
    }
  }

}
