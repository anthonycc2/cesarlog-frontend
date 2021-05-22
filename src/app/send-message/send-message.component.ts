import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html'
})
export class SendMessageComponent implements OnInit {

  hideSucessMessage: boolean;
  hideErrorMessage: boolean;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.hideSucessMessage = true;
    this.hideErrorMessage = true;
  }

  onSubmit() {
    this.send();
    //this.gotoList();
  }

  send() {
    this.messageService
      //.sendMessage(this.message).subscribe(data => {
      .sendMessage().subscribe(data => {
        console.log(data);
        this.hideSucessMessage = false;
        //this.equipment = new Equipment();
      },
        error => {
          console.log(error);
          this.hideErrorMessage = false;
        });
  }

}
