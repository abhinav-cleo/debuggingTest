import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  hitMe(){
    window.alert("Hello World");
  }

  hitMeAgain(){
    alert("Hello World");
  }

}
