import { Injectable, Component } from '@angular/core';
import { ZiggeoAudioPlayerDirective } from './ziggeo-audio-player.directive';

/**
 * ZiggeoAudioPlayer
 */
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'ziggeo-audio-player',
  // TODO: check the same in player why #selector is missing
  template: `<div #ziggeoaudioplayer></div>`
})
export class ZiggeoAudioPlayerComponent {
  constructor(private audioPlayer: ZiggeoAudioPlayerDirective) {}
}
