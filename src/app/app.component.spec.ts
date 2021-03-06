import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { EditVenueComponent } from './edit-venue/edit-venue.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { ProspectComponent } from './prospect/prospect.component';
import { NgxPaginationModule}  from 'ngx-pagination';
import { FederatedLoginComponent } from './federated-login/federated-login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';





describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MapComponent,
        EditVenueComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        ReactiveFormsModule,
        MatListModule,
        MatTabsModule,
        MatPaginatorModule,
        MatStepperModule,
        FormsModule,
        NgxPaginationModule,
        AgmCoreModule.forRoot({
          apiKey:'AIzaSyBvuCT0-V_Y50Np7Six7oTgqqL5wUzSPiw',
          
          libraries: ["places"]
          //'AIzaSyBvuCT0-V_Y50Np7Six7oTgqqL5wUzSPiw'
        }),    
        RouterModule.forRoot([]),
       ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        AuthService, AuthGuardService
      ]
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain a .site element', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.site')).toBeTruthy();
  }));
 

  it('Chceck Title', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
    });
   
});
