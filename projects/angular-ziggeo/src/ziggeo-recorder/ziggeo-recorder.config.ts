import {Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ZiggeoRecorderConfig {
  google_analytics_track: any;
  flashUrl: string;
  auth: any;
  testing_application: boolean;
  webrtc_streaming = false;
  webrtc_streaming_if_necessary = false;
  webrtc_on_mobile = false;
  debug = false;
}
