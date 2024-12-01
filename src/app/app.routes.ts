import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApodPageComponent } from './apod-page/apod-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'apod',
    component: ApodPageComponent
  }
];
