import {Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ZiggeoAudioPlayerConfig {
  auth: string;
  testing_application: boolean;
  google_analytics_track: string;
  debug = false;
}
