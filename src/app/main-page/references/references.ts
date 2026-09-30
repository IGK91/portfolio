import { Component } from '@angular/core';
import { Reference } from '../../shared/interfaces/reference.interface';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  // Hier kommt später eine Referenz aus einem gemeinsamen Projekt hin
  references: Reference[] = [
    {
      name: '[Name]',
      role: '[Rolle, Projekt]',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      name: '[Name]',
      role: '[Rolle, Projekt]',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      name: '[Name]',
      role: '[Rolle, Projekt]',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
  ];
}
