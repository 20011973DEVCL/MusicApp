import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsNewComponent } from './albums-new.component';

describe('AlbumsNewComponent', () => {
  let component: AlbumsNewComponent;
  let fixture: ComponentFixture<AlbumsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
