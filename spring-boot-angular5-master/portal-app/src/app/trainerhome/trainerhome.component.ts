import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { TrainerhomeService } from './trainerhome.service';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.component.html',
  styles: []
})
export class TrainerhomeComponent implements OnInit {

  mentor: Mentor[];

  constructor(private router: Router, private trainerhomeService: TrainerhomeService) {

  }

  ngOnInit() {
    this.trainerhomeService.getMentor()
      .subscribe( data => {
        this.mentor = data;
      });

      var getmentordata=JSON.parse(localStorage.getItem('storementordata'));
      console.log(getmentordata);
      document.getElementById('l').innerHTML="Welcome " + getmentordata.firstName+" "+getmentordata.lastName;
  };

  deleteMentor(mentor: Mentor): void {
    this.trainerhomeService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentor = this.mentor.filter(u => u !== mentor);
      })
  };

  
  logout()
  {
    sessionStorage.removeItem('id');
    this.router.navigate(['startpage']);
  }

}


