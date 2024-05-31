import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DynamicComponent } from './dynamic/dynamic.component';

export const routes: Routes = [
    { path: 'dynamic', component: DynamicComponent },
    { path: 'about', component: AboutComponent }
];
