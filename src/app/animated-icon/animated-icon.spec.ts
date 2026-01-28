import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedIcon } from './animated-icon';

describe('AnimatedIcon', () => {
  let component: AnimatedIcon;
  let fixture: ComponentFixture<AnimatedIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
