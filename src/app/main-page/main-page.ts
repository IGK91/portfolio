import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [Hero, About, Footer],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
