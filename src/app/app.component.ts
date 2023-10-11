import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Luka';
  showHelloWorld: boolean = false;
  helloWorldMessage= "Hello world!";

  displayHelloWorld(){
    this.showHelloWorld= !this.showHelloWorld;
  }
}
