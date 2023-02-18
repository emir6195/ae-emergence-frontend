import { Component, Input, OnInit } from '@angular/core';
import { OutgoingSmsModal } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-people-safe',
  templateUrl: './people-safe.component.html',
  styleUrls: ['./people-safe.component.css']
})
export class PeopleSafeComponent {
  @Input() outgoingMessages : OutgoingSmsModal[] | undefined;

}
