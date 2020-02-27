/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestHealthComponent } from './testHealth.component';

describe('TestHealthComponent', () => {
  let component: TestHealthComponent;
  let fixture: ComponentFixture<TestHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
