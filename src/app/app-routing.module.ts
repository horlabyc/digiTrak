import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientOrdersComponent } from './admin/client-orders/client-orders.component';
import { TrackingComponent } from './admin/tracking/tracking.component';
import { TrackOrdersComponent } from './admin/track-orders/track-orders.component';
import { RequestComponent } from './request/request.component';
import { ClientRequestComponent } from './client-request/client-request.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'clientOrders', component: ClientOrdersComponent},
  {path: 'track', component: TrackingComponent},
  {path: 'request', component: RequestComponent},
  {path: 'requests', component: ClientRequestComponent},
  {path: 'trackOrders', component: TrackOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
