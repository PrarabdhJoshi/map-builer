import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';
import { AuthService } from '../../auth/auth.service';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterModule.forRoot([]),
        MatToolbarModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
