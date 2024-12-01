import { NgStyle } from '@angular/common';
import { Component, computed, HostListener, OnInit, signal } from '@angular/core';

import { NasaApiService } from '../../services/nasa-api.service';
import { StarsBackgroundComponent } from '../ui/stars-background/stars-background.component';

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
      rgba(24, 24, 27, 1) 0%,
      rgba(9, 9, 11, ${this.bgImageOpacity()}) 50%
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
  }

  private setImageShade(isSmallScreen: boolean) {
    return isSmallScreen
      ? this.bgImageOpacity.set(0.6)
      : this.bgImageOpacity.set(0);
  }
}
