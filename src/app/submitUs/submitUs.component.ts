import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-submitUs',
  templateUrl: './submitUs.component.html',
  styleUrls: ['./submitUs.component.css']
})
export class SubmitUsComponent implements OnInit {

  submitus:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.submitus = this.fb.group({
      fName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      lName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      instaId: [''],
      category: ['mt'],
      story: ['']
    });
  }

}
