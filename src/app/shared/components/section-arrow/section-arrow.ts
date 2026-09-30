import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-arrow',
  imports: [RouterLink],
  templateUrl: './section-arrow.html',
  styleUrl: './section-arrow.scss',
})
export class SectionArrow {
  // 'left' zeigt nach unten links, 'right' nach unten rechts
  @Input() direction: 'left' | 'right' = 'left';
  @Input() targetFragment = '';
  @Input() label = '';
}
