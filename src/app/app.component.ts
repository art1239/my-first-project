import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Page';
  isDisabled=false;

  constructor (){
setTimeout(()=>{
this.isDisabled=true;
},3000);

}
}
