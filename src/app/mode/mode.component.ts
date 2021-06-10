import { Component, OnInit } from '@angular/core';
import { DarkModeService } from "angular-dark-mode";

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;

  constructor(private readonly darkModeService: DarkModeService) { }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  ngOnInit(): void {
  }

}
