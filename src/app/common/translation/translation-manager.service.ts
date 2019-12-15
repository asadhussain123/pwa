import { Injectable } from '@angular/core';
import { Translation } from './translation';
@Injectable({
  providedIn: 'root'
})
export class TranslationManagerService {
  currentLanguage = 'en';
  langs = [ { key: "en", displayName : "English" },  { key: "ur", displayName : "Urdu" } ];
  page = {};
  translations = Translation;
  constructor() { 
    this.page = this.translations[this.currentLanguage];
  }
}
