import {
  Component,
  computed,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';

import { NasaApiService } from '../../services/nasa-api.service';
import { StarsBackgroundComponent } from '../ui/stars-background/stars-background.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [StarsBackgroundComponent, NgStyle],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  isSmallScreen = signal<boolean>(false);

  bgImageUrl = signal<string>('/assets/img/galaxy.jpg');
  bgImageOpacity = signal<number>(0);
  bgImgStyle = computed(() => ({
    'background-image': `linear-gradient(
      to bottom,
      rgba(2, 6, 23, 0.6) 0%,
      rgba(2, 6, 23, ${this.bgImageOpacity()}) 50%
    ),
    url(${this.bgImageUrl()})`,
  }));

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen.set(window.innerWidth <= 768);
    this.setImageShade(this.isSmallScreen());
  }

  constructor(private readonly nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.isSmallScreen.set(window.innerWidth <= 768);
    this.setImageShade(this.isSmallScreen());
    this.getNasaApod();
  }

  private getNasaApod(date?: string) {
    this.nasaApiService.getNasaApod({ date }).subscribe({
      next: (response) => {
        const { url } = response || {};
        this.bgImageUrl.set(url);
      },
    });
  }

  private setImageShade(isSmallScreen: boolean) {
    console.log(
      '🚀 ~ HeroComponent ~ setImageShade ~ isSmallScreen:',
      isSmallScreen
    );
    return isSmallScreen
      ? this.bgImageOpacity.set(0.8)
      : this.bgImageOpacity.set(0);
  }
}
