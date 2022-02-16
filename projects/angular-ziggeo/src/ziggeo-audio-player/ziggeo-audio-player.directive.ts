import {
  Directive, DoCheck, ElementRef, Input, NgZone,
  Renderer2, AfterViewInit, OnDestroy, Output
} from '@angular/core';
import {ZiggeoAudioPlayerConfig} from './ziggeo-audio-player.config';

// ZiggeoApi
declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
  interface V2 {
    Application: any;
    AudioPlayer: any;
  }
}

@Directive({
  selector: 'ziggeoaudioplayer, ziggeo-audio-player[apiKey], ziggeo-audio-player[options]'
})
export class ZiggeoAudioPlayerDirective implements AfterViewInit, DoCheck, OnDestroy {

  public _element: any;
  private _application: any = null;
  private _appOptions: any = {};
  private _app_options: any = {};
  @Input() public apiKey: string;
  @Input() public options: any;
  @Output() public audioPlayerInstance: any;

  constructor(
    private element: ElementRef, private renderer: Renderer2,
    private ngZone: NgZone, private readonly config: ZiggeoAudioPlayerConfig
  ) {
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
          }
        }

        if (options.l10n) {
          ZiggeoApi.V2.Locale.setLocale(options.l10n);
        }
      }

      this.ngZone.runOutsideAngular(() => {
        this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, this._app_options);
      });
    }
  }

  ngAfterViewInit() {
    if (this._application) {
      this.ngZone.runOutsideAngular(() => {
        // Prevent during every change detection run ngDoCheck method
        this.audioPlayerInstance = new ZiggeoApi.V2.AudioPlayer({
          element: this._element,
          attrs: this.options
        }, this);
        if (typeof this.audioPlayerInstance.activate === 'function') {
          this.audioPlayerInstance.activate();
        } else {
          console.warn('Issue with launching audio player with Angular');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.audioPlayerInstance && typeof this.audioPlayerInstance.destroy === 'function') {
      this.audioPlayerInstance.destroy();
    }
  }
}
