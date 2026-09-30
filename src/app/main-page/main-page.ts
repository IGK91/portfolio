import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';
import { SectionArrow } from '../shared/components/section-arrow/section-arrow';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [Hero, About, Skills, Portfolio, References, Contact, SectionArrow, Footer],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
