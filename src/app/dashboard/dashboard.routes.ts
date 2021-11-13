import { Routes } from '@angular/router';
import { TankOneComponent } from './pages/tank-one/tank-one.component';
import { TankTwoComponent } from './pages/tank-two/tank-two.component';

// components

export const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'tank-1', pathMatch: 'full' },
  { path: 'tank-1', component: TankOneComponent },
  { path: 'tank-2', component: TankTwoComponent },
];
