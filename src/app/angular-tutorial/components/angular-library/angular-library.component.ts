import { Component, OnInit, OnChanges } from '@angular/core';

import { AngularTutorialService } from '../../services/angular-tutorial.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-library',
  templateUrl: './angular-library.component.html',
  styleUrls: ['./angular-library.component.css']
})
export class AngularLibraryComponent implements OnInit {
  output: any[];
  message: string
  constructor(private libServices: AngularTutorialService) { }

  ngOnInit() {
    this.getAngLibDetails();
    this.libServices.currentMessage.subscribe(msg => this.message = msg);
  }

  getAngLibDetails() {
    this.libServices.getAngTutorialDetails()
      .subscribe((data) =>
        this.output = data
      )
  }

}
