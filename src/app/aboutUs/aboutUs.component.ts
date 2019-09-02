import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      let w = $('.eimg').width();
      $('.eimg').css({ 'height': w });


      let h = $('.eimg').height();
      let he = $('.e-name').height();
      let hd = $('.d-name').height();

      let total = h + he + hd + 40;

      $('.flip-card-inner').css({ 'height': total });
      $('.flip-card-front').css({ 'height': total });
      $('.flip-card-back').css({ 'height': total });
      $('.flip-card').css({ 'height': total });
    });
  }

}
