import { Component, Input, OnInit } from '@angular/core';
import { OutgoingSmsModal } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-people-unsafe',
  templateUrl: './people-unsafe.component.html',
  styleUrls: ['./people-unsafe.component.css']
})
export class PeopleUnsafeComponent {
  @Input() outgoingMessages: OutgoingSmsModal[] | undefined;

}
