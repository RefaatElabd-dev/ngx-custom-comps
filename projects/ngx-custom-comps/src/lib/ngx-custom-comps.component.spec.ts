import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustomCompsComponent } from './ngx-custom-comps.component';

describe('NgxCustomCompsComponent', () => {
  let component: NgxCustomCompsComponent;
  let fixture: ComponentFixture<NgxCustomCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCustomCompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCustomCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
