import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'components',
        loadChildren: () => import('../app/components/components-routing.module').then(m => m.ComponentsRoutingModule)
    },
];
