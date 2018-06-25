import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateUpdateComponent } from './crate-update.component';

describe('CrateUpdateComponent', () => {
  let component: CrateUpdateComponent;
  let fixture: ComponentFixture<CrateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
