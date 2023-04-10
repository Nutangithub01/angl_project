import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = "Felix IT Systems";
  received = "";
  
  constructor() {}

  ngOnInit(): void {
    
  }

  eventOccurs(event: string) {
    alert(event);
    this.received = event;
  }
}
