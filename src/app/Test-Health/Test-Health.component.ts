import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './../testservice/testservice.service';


@Component({
  selector: 'app-Test-Health',
  templateUrl: './Test-Health.component.html',
  styleUrls: ['./Test-Health.component.css']
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
