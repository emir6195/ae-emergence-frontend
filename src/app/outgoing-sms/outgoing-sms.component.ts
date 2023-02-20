import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-outgoing-sms',
  templateUrl: './outgoing-sms.component.html',
  styleUrls: ['./outgoing-sms.component.css']
})
export class OutgoingSmsComponent implements OnInit {
  constructor(private smsService: SmsService) {}

  outgoingMessages : any;

  ngOnInit(): void {
    this.getOutgoingMessages();
  }

  getOutgoingMessages() {
    return this.smsService.getOutgoingMessages().subscribe(data => {
      this.outgoingMessages = data;
      setTimeout(() => {
        $('#outgoing-sms').DataTable();
      }, 100);
    })
  }

}
