import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesNewComponent } from './countries-new.component';

describe('CountriesNewComponent', () => {
  let component: CountriesNewComponent;
  let fixture: ComponentFixture<CountriesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
