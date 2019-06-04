import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsHttpClientComponent } from './ts-http-client.component';

describe('TsHttpClientComponent', () => {
  let component: TsHttpClientComponent;
  let fixture: ComponentFixture<TsHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
