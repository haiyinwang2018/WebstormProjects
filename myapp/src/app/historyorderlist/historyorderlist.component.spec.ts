import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryorderlistComponent } from './historyorderlist.component';

describe('HistoryorderlistComponent', () => {
  let component: HistoryorderlistComponent;
  let fixture: ComponentFixture<HistoryorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
