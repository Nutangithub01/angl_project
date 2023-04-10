import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  name = "felix";

  user = {
    id: 1,
    firstname: "nutan",
    lastname: "zungre"
  };

  arr = ["jan","feb","mar","apr","may","jun","jul","aug","sept"];
  constructor() {}
  
  ngOnInit(): void {
    
  }
}
