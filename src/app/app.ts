import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    // Abstand für den festen Header, wenn per Link zu einer Sektion gesprungen wird
    this.viewportScroller.setOffset([0, 110]);
  }
}
