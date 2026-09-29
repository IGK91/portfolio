import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() showScrollTop = false;

  email = 'vincent.sonneck@googlemail.com';
  currentYear = new Date().getFullYear();
}
