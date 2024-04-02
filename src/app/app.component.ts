import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x= false
  title = 'firstapp ARCTIC 8 ';
  msg=""
  nb = 6
  ngOnChanges(){
    console.log('t');
    
  }
  methodA(){
    return 4
  }
  methodB(){
    this.msg="This is a new text"
  }
}
