import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCoverComponent } from './contact-cover.component';

describe('ContactCoverComponent', () => {
  let component: ContactCoverComponent;
  let fixture: ComponentFixture<ContactCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
