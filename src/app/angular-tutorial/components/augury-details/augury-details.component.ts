import { Component, OnInit } from '@angular/core';
import { AngularTutorialService } from '../../services/angular-tutorial.service';

@Component({
  selector: 'app-augury-details',
  templateUrl: './augury-details.component.html',
  styleUrls: ['./augury-details.component.css']
})
export class AuguryDetailsComponent implements OnInit {
  messageValue: string;
  constructor(private augrySerive: AngularTutorialService) { }

  ngOnInit() {
    this.augrySerive.currentMessage.subscribe(msg => this.messageValue = msg);
  }
  setMessage() {
    this.augrySerive.settingNewMessage("Hello User")
  }
}
