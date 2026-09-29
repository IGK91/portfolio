import { Component } from '@angular/core';

type Language = 'EN' | 'DE';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.scss',
})
export class LanguageToggle {
  languages: Language[] = ['EN', 'DE'];
  activeLanguage: Language = 'DE';

  // Die Übersetzung selbst kommt später dazu, hier wird nur die Auswahl angezeigt
  selectLanguage(language: Language) {
    this.activeLanguage = language;
  }
}
