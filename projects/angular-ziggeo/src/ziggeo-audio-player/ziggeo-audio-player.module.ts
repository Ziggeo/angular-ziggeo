import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ZiggeoAudioPlayerComponent } from './ziggeo-audio-player.component';
import { ZiggeoAudioPlayerDirective } from './ziggeo-audio-player.directive';

export { ZiggeoAudioPlayerComponent } from './ziggeo-audio-player.component';

@NgModule({
  declarations: [
    ZiggeoAudioPlayerComponent,
    ZiggeoAudioPlayerDirective
  ],
  exports: [
    ZiggeoAudioPlayerComponent,
    ZiggeoAudioPlayerDirective
  ],
  providers: []
})
export class ZiggeoAudioPlayerModule {}
