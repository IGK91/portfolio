import { Component } from '@angular/core';
import { ProjectItem } from '../project-item/project-item';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectItem],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  // Links und Screenshots werden am Schluss durch die echten ersetzt
  projects: Project[] = [
    {
      name: 'Pokédex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'img/projects/pokedex.jpg',
      githubUrl: 'https://github.com/IGK91',
      liveUrl: '#',
    },
    {
      name: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'img/projects/el-pollo-loco.svg',
      githubUrl: 'https://github.com/IGK91',
      liveUrl: '#',
    },
    {
      name: 'Join',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'img/projects/join.jpg',
      githubUrl: 'https://github.com/IGK91',
      liveUrl: '#',
    },
  ];
}
