import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        loadComponent: () => import('../app/components/dashboardGroup/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path:'katalog',
    
        loadComponent:()=>import('../app/components/katalogGroup/katalog/katalog.component')
        .then(m=>m.KatalogKovrolinComponent)
    }
];
