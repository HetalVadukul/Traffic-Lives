import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestserviceService {


  baseUrl = 'https://poc-api-healthcheck.azurewebsites.net/api';
  hubConnection: HubConnection | undefined;
  messages: Subject<string> = new Subject();

constructor() { }
init() {
  this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.baseUrl)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  this.hubConnection.serverTimeoutInMilliseconds = 300000;

  this.hubConnection.start().catch((err: { toString: () => any; }) => console.error(err.toString()));

  this.hubConnection.on('latestData', (data: any) => {
    this.messages.next(data);
  });

  this.hubConnection.onclose((error) => {
    if (this.hubConnection) {
      this.hubConnection.start();
    }
    console.error('Something went wrong: ', error);
    });
  }
}
