import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() receivedContent = "";
  @Output() myEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    
  }

  sendDataToParent() {
    this.myEvent.emit("Thank You!");
  }
}
