import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageToggle } from '../language-toggle/language-toggle';
import { SocialLinks } from '../social-links/social-links';

interface MenuLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, LanguageToggle, SocialLinks],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;
  email = 'vincent.sonneck@googlemail.com';

  menuLinks: MenuLink[] = [
    { label: 'Über mich', fragment: 'ueber-mich' },
    { label: 'Meine Skills', fragment: 'skills' },
    { label: 'Portfolio', fragment: 'portfolio' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateBodyScroll();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  private updateBodyScroll() {
    document.body.classList.toggle('no-scroll', this.isMenuOpen);
  }
}
