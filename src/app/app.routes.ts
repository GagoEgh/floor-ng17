import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboardGroup/dashboard/dashboard.component';
import { KatalogKovrolinComponent } from './components/katalogGroup/katalog/katalog.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:DashboardComponent
    },
    {
        path:'katalog',
        component:KatalogKovrolinComponent 
    }
];
