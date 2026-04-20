import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMessage } from './pop-up-message';

describe('PopUpMessage', () => {
  let component: PopUpMessage;
  let fixture: ComponentFixture<PopUpMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
