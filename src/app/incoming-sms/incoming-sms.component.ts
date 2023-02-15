import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-incoming-sms',
  templateUrl: './incoming-sms.component.html',
  styleUrls: ['./incoming-sms.component.css']
})
export class IncomingSmsComponent implements OnInit {

  constructor(private smsService: SmsService) {}

  incomingMessages : any;

  ngOnInit(): void {
    this.getIncomingSmsList();
  }

  getIncomingSmsList() {
    this.smsService.getIncomingMessages().subscribe(data => {
      console.log(data);
      this.incomingMessages = data;
      setTimeout(() => {
        $('#incoming-sms').DataTable();
      }, 100);
    })
  }

}
