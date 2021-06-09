import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isMobile : boolean;


  constructor() { }

  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.isMobile = true;
    }
  }

}
