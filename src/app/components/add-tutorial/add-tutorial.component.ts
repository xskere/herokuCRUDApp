import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    thestring: "",
    theboolean: false,
    thenumber: 0,
    arrayfirst: "",
    arraysecond: ""
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      thestring: this.tutorial.thestring,
      theboolean: false,
      thenumber: this.tutorial.thenumber,
      arrayfirst: this.tutorial.arrayfirst,
      arraysecond: this.tutorial.arraysecond
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      thestring: "",
      theboolean: false,
      thenumber: 0,
      arrayfirst: "",
      arraysecond: ""
    };
  }

}
