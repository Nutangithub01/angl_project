import { Component,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger("openclose", [
      state("open", style({
        height: "300px",
        backgroundColor: "yellow"
      })),
      state("close", style({
        height: "100px",
        backgroundColor: "lightblue"
      })),
      transition("open=>close", [
        animate("1s")
      ]),
      transition("close=>open", [
        animate("0.5s")
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  isOpen = true;

  constructor() {}

  ngOnInit(): void {
    
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
