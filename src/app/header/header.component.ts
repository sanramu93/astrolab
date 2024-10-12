import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isNavOpen = signal(false);
  mobileMenuEl = viewChild<ElementRef>('mobileMenu');

  onToggleNavOpen() {
    this.isNavOpen.set(!this.isNavOpen());
  }
}
