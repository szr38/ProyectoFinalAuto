import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TankOneComponent } from './pages/tank-one/tank-one.component';
import { TankTwoComponent } from './pages/tank-two/tank-two.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderDashboardComponent,
    GraphicComponent,
    TankOneComponent,
    TankTwoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
