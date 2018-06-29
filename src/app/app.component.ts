import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  links = [
    { url: "test1", label: "test1" },
    { externalUrl: "http://www.google.at", label: "test2" }];
}
