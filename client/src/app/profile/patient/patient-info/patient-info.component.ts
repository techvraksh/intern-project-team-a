import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})


export class PatientInfoComponent implements OnInit {
  state: number = 1;
  userDetails = {
    name : 'Sahil Agarwal',
    age : '23',
    address: 'Agra',
    gender: 'Male',
    bloodgrp: 'B+',
    mobileno: '7017672588',
    email:'sahildsce@gmail.com'
  }
  constructor() { }
  onstatechanged(state:number) {
    this.state = state;
  }
  onSubmit(form: NgForm) {
    this.userDetails.mobileno = form.value.mobile;
    this.userDetails.age = form.value.age;
    this.userDetails.address = form.value.address;
    this.state = 1;
  }
  ngOnInit(): void {
  }

}
