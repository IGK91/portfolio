import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [Hero, About, Skills, Footer],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
