
import {
  Injectable,
  PLATFORM_ID,
  inject,
  signal
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>('light');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    const saved = localStorage.getItem('theme');

    const initialTheme: Theme =
      saved === 'light' || saved === 'dark'
        ? saved
        : window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches
          ? 'dark'
          : 'light';

    this.setTheme(initialTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);

    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.dataset['theme'] = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.setTheme(
      this.theme() === 'light' ? 'dark' : 'light'
    );
  }
}
