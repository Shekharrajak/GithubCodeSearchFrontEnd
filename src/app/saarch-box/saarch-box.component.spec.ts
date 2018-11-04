import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaarchBoxComponent } from './saarch-box.component';

describe('SaarchBoxComponent', () => {
  let component: SaarchBoxComponent;
  let fixture: ComponentFixture<SaarchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaarchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaarchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
