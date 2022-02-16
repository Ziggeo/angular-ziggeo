import { NgModule } from '@angular/core';

import { ZiggeoPlayerModule } from './ziggeo-player/ziggeo-player.module';
import { ZiggeoRecorderModule } from './ziggeo-recorder/ziggeo-recorder.module';
import { ZiggeoAudioPlayerModule } from './ziggeo-audio-player/ziggeo-audio-player.module';
import { ZiggeoAudioRecorderModule } from './ziggeo-audio-recorder/ziggeo-audio-recorder.module';

const ZIGGEO_MODULES = [
  ZiggeoPlayerModule,
  ZiggeoRecorderModule,
  ZiggeoAudioPlayerModule,
  ZiggeoAudioRecorderModule,
];

@NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
export class ZiggeoModule {}

