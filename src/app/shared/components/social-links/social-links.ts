import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-links',
  imports: [RouterLink],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  @Output() linkClicked = new EventEmitter<void>();

  githubUrl = 'https://github.com/IGK91';
  // Platzhalter, bis der echte LinkedIn-Link da ist
  linkedinUrl = 'https://www.linkedin.com/';
}
