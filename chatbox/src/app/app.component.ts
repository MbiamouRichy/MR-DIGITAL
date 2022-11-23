import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbox';
  hover = 'nohover';
  clic = 'noclic';
  onchange(){
    this.hover =  'hover';
  }
  onpaschange(){
    this.hover =  'nohover';
  }
  onclic(){
    this.clic = 'clic';
  }
  onnoclic(){
    this.clic = 'noclic';
  }

}
