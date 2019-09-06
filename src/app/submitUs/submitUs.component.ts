import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-submitUs',
  templateUrl: './submitUs.component.html',
  styleUrls: ['./submitUs.component.css']
})
export class SubmitUsComponent implements OnInit {

  submitus: FormGroup;

  constructor(private fb: FormBuilder) { }
  len: number;
  val: any = Validators.maxLength(60);

  onChange(category) {
    console.log(category);

    if (category === 'ref') {
      this.len = 280;
      this.val = Validators.maxLength(280);
    } else if (category === 'nf') {
      this.len = 60;
      this.val = Validators.maxLength(60);
    } else if (category === 'mt') {
      this.len = 180;
      this.val = Validators.maxLength(180);
    }
}

  ngOnInit() {

    // this.categoryLengthValidation = Validators.maxLength(180);
    this.len = 180;

    // let val = Validators.maxLength(60);

    this.submitus = this.fb.group({
      fName: ['', [Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      lName: ['', [Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      instaId: [''],
      category: ['mt'],
      story: ['', [this.val]]
    });
  }

}
