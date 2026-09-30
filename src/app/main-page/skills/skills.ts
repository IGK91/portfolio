import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Skill } from '../../shared/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', icon: 'icons/skill-angular.svg' },
    { name: 'TypeScript', icon: 'icons/skill-typescript.svg' },
    { name: 'JavaScript', icon: 'icons/skill-javascript.svg' },
    { name: 'HTML', icon: 'icons/skill-html.svg' },
    { name: 'CSS', icon: 'icons/skill-css.svg' },
    { name: 'Supabase', icon: 'icons/skill-supabase.svg' },
    { name: 'Git', icon: 'icons/skill-git.svg' },
    { name: 'Scrum', icon: 'icons/skill-scrum.svg' },
    { name: 'REST-API', icon: 'icons/skill-rest-api.svg' },
    { name: 'Material Design', icon: 'icons/skill-material-design.svg' },
  ];
}
