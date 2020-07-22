import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentListComponent } from './user-document-list.component';

describe('UserDocumentListComponent', () => {
  let component: UserDocumentListComponent;
  let fixture: ComponentFixture<UserDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
