import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  content: string|undefined;
  constructor(private service: SendDataService) {
    this.content = "";

  }

  ngOnInit(): void {
    
  }

  saveContent() {
    this.service.sendDataThroughSubject(this.content!);
    this.content = "";
  }

  resetContent() {
    this.service.resetDataThroughSubject();
  }
}
