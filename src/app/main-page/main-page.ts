import { Component } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [Footer],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
