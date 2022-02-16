import { NgModule } from '@angular/core';
import { ZiggeoAudioRecorderComponent } from './ziggeo-audio-recorder.component';
import { ZiggeoAudioRecorderDirective } from './ziggeo-audio-recorder.directive';

export { ZiggeoAudioRecorderComponent } from './ziggeo-audio-recorder.component';

@NgModule({
  declarations: [
    ZiggeoAudioRecorderComponent,
    ZiggeoAudioRecorderDirective
  ],
  exports: [
    ZiggeoAudioRecorderComponent,
    ZiggeoAudioRecorderDirective
  ],
  providers: []
})
export class ZiggeoAudioRecorderModule {
}
