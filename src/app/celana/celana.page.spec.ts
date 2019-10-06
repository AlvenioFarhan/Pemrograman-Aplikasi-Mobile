import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelanaPage } from './celana.page';

describe('CelanaPage', () => {
  let component: CelanaPage;
  let fixture: ComponentFixture<CelanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelanaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
