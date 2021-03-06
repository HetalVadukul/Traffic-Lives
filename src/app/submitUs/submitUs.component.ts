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
  vall: any;

  onChange(category) {
    console.log(category);

    if (category === 'ref') {
      this.len = 280;
      this.vall = Validators.maxLength(280);
      this.submitus.controls['story'].setValidators([this.vall]);
    } else if (category === 'nf') {
      this.len = 60;
      this.vall = Validators.maxLength(60);
      this.submitus.controls['story'].setValidators([this.vall]);
    } else if (category === 'mt') {
      this.len = 180;
      this.vall = Validators.maxLength(180);
      this.submitus.controls['story'].setValidators([this.vall]);
    }
}

  ngOnInit() {

    // this.categoryLengthValidation = Validators.maxLength(180);
    this.len = 180; 

    this.vall = Validators.maxLength(180);

    this.submitus = this.fb.group({
      fName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      lName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      instaId: [''],
      category: ['mt'],
      story: ['', [Validators.required, this.vall]]
    });
  }

}
