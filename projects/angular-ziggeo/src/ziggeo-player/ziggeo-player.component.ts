import {
  Injectable, Component, AfterViewChecked
} from '@angular/core';
import { ZiggeoPlayerDirective } from './ziggeo-player.directive';

/**
 * ZiggeoPlayer
 */
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'ziggeo-player',
  template: `<div></div>`
})
export class ZiggeoPlayerComponent {
  constructor(private player: ZiggeoPlayerDirective) {}
}
