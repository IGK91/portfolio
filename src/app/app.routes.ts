import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: MainPage, title: 'Vincent Sonneck | Frontend Developer' },
  { path: 'impressum', component: LegalNotice, title: 'Impressum | Vincent Sonneck' },
  { path: 'datenschutz', component: PrivacyPolicy, title: 'Datenschutz | Vincent Sonneck' },
  { path: '**', redirectTo: '' },
];
