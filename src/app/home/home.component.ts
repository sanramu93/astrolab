import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CardFeatureComponent } from '../ui/card-feature/card-feature.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CardFeatureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
