import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  count: number = 0;
  @Output() numberEvent = new EventEmitter<number>();

  
  constructor() { }

  ngOnInit() {
  }

  counter() {

    

    this.interval = setInterval(()=>{
      
        
        this.increment()
        
    }, 1000)
    
} 
increment() {
  this.count++;
  this.numberEvent.emit(this.count);
}

  onStart() {
    this.counter();    
  }

  onStop() {
    clearInterval(this.interval);
  }

}
