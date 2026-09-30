import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.html',
  styleUrl: './project-item.scss',
})
export class ProjectItem implements OnInit {
  @Input() project!: Project;
  @Input() index = 0;
  @Input() total = 0;

  numberLabel = '';
  isReversed = false;

  ngOnInit() {
    this.numberLabel = `${this.formatNumber(this.index + 1)}/${this.formatNumber(this.total)}`;
    // Jedes zweite Projekt hat das Bild rechts
    this.isReversed = this.index % 2 === 1;
  }

  private formatNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
