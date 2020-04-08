import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ZiggeoPlayerComponent } from './ziggeo-player.component';
import { ZiggeoPlayerDirective } from './ziggeo-player.directive';

export { ZiggeoPlayerComponent } from './ziggeo-player.component';

@NgModule({
  declarations: [
    ZiggeoPlayerComponent,
    ZiggeoPlayerDirective
  ],
  exports: [
    ZiggeoPlayerComponent,
    ZiggeoPlayerDirective
  ],
  providers: []
})
export class ZiggeoPlayerModule {}
