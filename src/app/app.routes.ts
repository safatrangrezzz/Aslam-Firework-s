import { Routes } from '@angular/router';
import { About } from './about/about';
import { Products } from './products/products';
import { SafetyGuide } from './safety-guide/safety-guide';
import { SubLandingPage } from './sub-landing-page/sub-landing-page';
import { Admin } from './admin/admin';
import { DataEditComponent } from './data-edit-component/data-edit-component';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: SubLandingPage,title: 'Aslam Fireworks home'},
    {path: 'about', component: About,title: 'Aslam Fireworks about' },
    {path: 'products', component: Products,title: 'Aslam Fireworks products'},
    {path: 'safety', component:SafetyGuide,title: 'Aslam Fireworks safety'},
    {path: 'admin', component:Admin,title: 'Aslam Fireworks admin'},
    {path: 'dataBase', component:DataEditComponent,title: 'Aslam Fireworks admin',canActivate:[authGuard]}
];
