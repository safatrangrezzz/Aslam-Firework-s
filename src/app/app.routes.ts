import { Routes } from '@angular/router';
import { About } from './about/about';
import { Products } from './products/products';
import { SafetyGuide } from './safety-guide/safety-guide';
import { SubLandingPage } from './sub-landing-page/sub-landing-page';
import { DataEditComponent } from './data-edit-component/data-edit-component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: SubLandingPage},
    {path: 'about', component: About},
    {path: 'products', component: Products},
    {path: 'safety', component:SafetyGuide},
    {path: 'setting', component:DataEditComponent}
];
