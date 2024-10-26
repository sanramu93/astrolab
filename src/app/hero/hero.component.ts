import { Component } from '@angular/core';
import { StarsBackgroundComponent } from "../ui/stars-background/stars-background.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [StarsBackgroundComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
