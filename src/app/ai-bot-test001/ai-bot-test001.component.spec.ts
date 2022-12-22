import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBotTest001Component } from './ai-bot-test001.component';

describe('AiBotTest001Component', () => {
  let component: AiBotTest001Component;
  let fixture: ComponentFixture<AiBotTest001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiBotTest001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBotTest001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
