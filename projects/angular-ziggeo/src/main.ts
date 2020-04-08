import { NgModule } from '@angular/core';

import { ZiggeoPlayerModule } from './ziggeo-player/ziggeo-player.module';
import { ZiggeoRecorderModule } from './ziggeo-recorder/ziggeo-recorder.module';

const ZIGGEO_MODULES = [
  ZiggeoPlayerModule,
  ZiggeoRecorderModule
];

@NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
export class ZiggeoModule {}

