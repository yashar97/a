import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycountryPageComponent } from './bycountry-page.component';

describe('BycountryPageComponent', () => {
  let component: BycountryPageComponent;
  let fixture: ComponentFixture<BycountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BycountryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BycountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
