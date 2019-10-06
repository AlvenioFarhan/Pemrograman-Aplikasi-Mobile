import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajupriaPage } from './bajupria.page';

describe('BajupriaPage', () => {
  let component: BajupriaPage;
  let fixture: ComponentFixture<BajupriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajupriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajupriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
