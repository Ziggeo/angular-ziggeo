import {
  Injectable, Component
} from '@angular/core';
import {ZiggeoAudioRecorderDirective} from './ziggeo-audio-recorder.directive';

/**
 * ZiggeoRecorder
 */
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'ziggeo-audio-recorder',
  template: `<div #ziggeoaudiorecorder ></div>`
})
export class ZiggeoAudioRecorderComponent {
  constructor(private audioRecorder: ZiggeoAudioRecorderDirective) {}
}
