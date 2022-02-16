import {
  Directive, DoCheck, ElementRef, Input, NgZone,
  Renderer2, AfterViewInit, OnDestroy, Output
} from '@angular/core';
import { ZiggeoAudioRecorderConfig } from './ziggeo-audio-recorder.config';

// ZiggeoApi
declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
  interface V2 {
    Application: any;
    AudioRecorder: any;
  }
}

@Directive({
  exportAs: 'ziggeoaudiorecorder',
  selector: 'ziggeoaudiorecorder, ziggeo-audio-recorder[apiKey], ziggeo-audio-recorder[options]'
})
export class ZiggeoAudioRecorderDirective implements AfterViewInit, DoCheck, OnDestroy {

  public _element: any;
  private _application: any = null;
  private _appOptions: any = {};
  @Input() public apiKey: string;
  @Input() public options: any;
  @Output() public audioRecorderInstance: any;

  constructor(
    private element: ElementRef, private renderer: Renderer2,
    private ngZone: NgZone, private readonly config: ZiggeoAudioRecorderConfig
  ) {
    this.config = config;
    this._element = this.element.nativeElement;
  }

  ngDoCheck(): void {
    const apiKey = `${this.apiKey}`;
    const options = this.options;

    if (apiKey && !this._application) {

      if (options) {
        for (const [key, value] of Object.entries(this.config)) {
          if (options[key] !== undefined && typeof options[key] === typeof value) {
            this._appOptions[key] = options[key];
          } else if (typeof this.config[key] !== 'undefined') {
            // Set default values
            this._appOptions[key] = this.config[key];
          }
        }

        if (options.l10n) {
          ZiggeoApi.V2.Locale.setLocale(options.l10n);
        }
      }

      this.ngZone.runOutsideAngular(() => {
        this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, this._appOptions);
      });
    }
  }

  ngAfterViewInit() {
    if (this._application) {
      this.ngZone.runOutsideAngular(() => {
        // Prevent during every change detection run ngDoCheck method
        this.audioRecorderInstance = new ZiggeoApi.V2.AudioRecorder({
          element: this._element,
          attrs: this.options
        }, this);
        if (typeof this.audioRecorderInstance.activate === 'function') {
          this.audioRecorderInstance.activate();
        } else {
          console.warn('Issue with launching audio recorder with Angular');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.audioRecorderInstance && typeof this.audioRecorderInstance.destroy === 'function') {
      this.audioRecorderInstance.destroy();
    }
  }
}
