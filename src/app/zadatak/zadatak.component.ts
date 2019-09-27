import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zadatak',
  templateUrl: './zadatak.component.html',
  styleUrls: ['./zadatak.component.css']
})
export class ZadatakComponent implements OnInit {
  
  evenNumber;
  oddNumber;
  @Output() numberEvenOdd = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onNotify(event){
    
    if(event%2 == 0)
    {
      this.evenNumber =event;
    }
    if(event%2 == 1)
    {
      this.oddNumber=event;
    }  
      console.log(event);
  }


  
}
