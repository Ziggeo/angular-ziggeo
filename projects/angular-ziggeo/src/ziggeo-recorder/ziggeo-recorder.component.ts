import {
  Injectable, Component
} from '@angular/core';
import {ZiggeoRecorderDirective} from './ziggeo-recorder.directive';

/**
 * ZiggeoRecorder
 */
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'ziggeo-recorder',
  template: `<div #ziggeorecorder ></div>`
})
export class ZiggeoRecorderComponent {
  constructor(private recorder: ZiggeoRecorderDirective) {}
}
