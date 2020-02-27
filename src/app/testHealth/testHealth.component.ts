import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './../testservice/testservice.service';


@Component({
  selector: 'app-test-health',
  templateUrl: './testHealth.component.html',
  styleUrls: ['./testHealth.component.css']
})
export class TestHealthComponent implements OnInit {

  health: string;
  constructor(private signalRService: TestserviceService) { }

  ngOnInit() {
    this.signalRService.messages.subscribe(message => {
      this.health = message;
    });
  }


}
