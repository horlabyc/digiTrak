import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { CommsComponent } from './admin/comms/comms.component';
import { AlertComponent } from './admin/alert/alert.component';
import { HistoryComponent } from './admin/history/history.component';
import { FuelComponent } from './admin/fuel/fuel.component';
import { ClientOrdersComponent } from './admin/client-orders/client-orders.component';
import { HeaderComponent } from './admin/header/header.component';
import { TrackingComponent } from './admin/tracking/tracking.component';
import { TrackOrdersComponent } from './admin/track-orders/track-orders.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RequestComponent } from './request/request.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClientRequestComponent } from './client-request/client-request.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

const config = {
  apiKey: 'AIzaSyCg0ai0qVhkeB58lCW2Z-ipD4NxckxlmYA',
  authDomain: 'project-ngbook.firebaseapp.com',
  databaseURL: 'https://project-ngbook.firebaseio.com',
  projectId: 'project-ngbook',
  storageBucket: 'project-ngbook.appspot.com',
  messagingSenderId: '163591402035'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    OrdersComponent,
    CommsComponent,
    AlertComponent,
    HistoryComponent,
    FuelComponent,
    ClientOrdersComponent,
    HeaderComponent,
    TrackingComponent,
    TrackOrdersComponent,
    SideBarComponent,
    RequestComponent,
    ClientRequestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // MatInputModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
    AppRoutingModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
