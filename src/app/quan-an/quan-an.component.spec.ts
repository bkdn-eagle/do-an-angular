import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanAnComponent } from './quan-an.component';

describe('QuanAnComponent', () => {
  let component: QuanAnComponent;
  let fixture: ComponentFixture<QuanAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
