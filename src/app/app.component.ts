import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "CodeSandbox";

  year = 2020

  list = [
    'a',
    'aa',
    'b'
  ]

  upper(string) {
    this.title = string.toUpperCase();
  }
  setTitle(str) {
    console.log('str', str);
    
    this.title = str
  }

  setList(list) {
    console.log('set', list);
    
    // this.list = list
    this.year = list
  }
}
