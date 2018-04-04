import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { NotificationPageComponent } from './pages/notification/notification.component';
import { MainPageComponent } from './pages/main/main.component';

const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    {
      path: '',
      component: DashboardPageComponent,
      pathMatch: 'full',
    },
    {
      path: 'compose-notification',
      component: NotificationPageComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
