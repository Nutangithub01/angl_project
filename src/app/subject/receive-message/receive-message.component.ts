import { Component, OnDestroy, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent implements OnInit, OnDestroy{

  gotContent: string = "";
  subscription: Subscription;

  constructor(private service: SendDataService) {

    let self = this;
    this.subscription = this.service.receiveDataThroughSubject().subscribe(data => {
      this.gotContent = data as string;
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
