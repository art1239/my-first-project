import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Page';
  username='';
  isLogedIn=false;


  constructor (){
  

}

logIn(){
  this.isLogedIn=true;
}
changeTitle(){
this.username='';
}
updateNameValue(event:any){
this.title=event.target.value;
}
}

