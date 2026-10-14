import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'Inicio', path: '/', exact: true },
    { label: 'Adoptar', path: '/adoptar' },
    { label: 'Cómo funciona', path: '/como-funciona' },
    { label: 'Ayudar', path: '/ayudar' }
  ];

  readonly favoritesCount = signal(0);
}
