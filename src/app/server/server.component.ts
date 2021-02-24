import { Component, setTestabilityGetter } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./servet.component.html',
 
}
)
export class ServerComponent{
    temperature:number=36.5;
    city:String='Tirane';
 
    
 
    

 getTemperature(){
return this.temperature;
 }

 getCity(){
    return this.city;
     }
}