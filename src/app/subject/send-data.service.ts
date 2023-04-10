import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  subject = new Subject;
  constructor() { }

  sendDataThroughSubject(content: string) {
    this.subject.next(content);
  }

  resetDataThroughSubject() {
    this.subject.next("");
  }

  receiveDataThroughSubject() {
    return this.subject.asObservable();
  }
}
