import { NgModule } from '@angular/core';
import { ZiggeoRecorderComponent } from './ziggeo-recorder.component';
import { ZiggeoRecorderDirective } from './ziggeo-recorder.directive';

export { ZiggeoRecorderComponent } from './ziggeo-recorder.component';

@NgModule({
  declarations: [
    ZiggeoRecorderComponent,
    ZiggeoRecorderDirective
  ],
  exports: [
    ZiggeoRecorderComponent,
    ZiggeoRecorderDirective
  ],
  providers: []
})
export class ZiggeoRecorderModule {
}
