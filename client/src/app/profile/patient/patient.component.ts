import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  count: any = ["10", "20", "30", "40", "50", "60"]
  state: number = 1;
  constructor() { }
  switchtab(st:number) {
    this.state = st;
  }

  ngOnInit(): void {
  }

}
