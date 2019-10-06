import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajuPage } from './baju.page';

describe('BajuPage', () => {
  let component: BajuPage;
  let fixture: ComponentFixture<BajuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
