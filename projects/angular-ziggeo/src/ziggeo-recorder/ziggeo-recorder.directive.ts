import {
  Directive, DoCheck, ElementRef, Input, NgZone,
  Renderer2, AfterViewInit, OnDestroy, Output
} from '@angular/core';
import { ZiggeoRecorderConfig } from './ziggeo-recorder.config';

// ZiggeoApi
declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
  interface V2 {
    Application: any;
    Recorder: any;
  }
}

@Directive({
  exportAs: 'ziggeorecorder',
  selector: 'ziggeorecorder, ziggeo-recorder[apiKey], ziggeo-recorder[options]'
})
export class ZiggeoRecorderDirective implements AfterViewInit, DoCheck, OnDestroy {

  public _element: any;
  private _application: any = null;
  private _appOptions: any = {};
  @Input() public apiKey: string;
  @Input() public options: any;
  @Output() public recorderInstance: any;

  constructor(
    private element: ElementRef, private renderer: Renderer2,
    private ngZone: NgZone, private readonly config: ZiggeoRecorderConfig
  ) {
    this.config = config;
    this._element = this.element.nativeElement;
  }

  ngDoCheck(): void {
    const apiKey = `${this.apiKey}`;
    const options = this.options;

    if (apiKey && !this._application) {

      if (options) {
        if (options.allowscreen) {
          console.warn('Deprecated will be removed. Reason: Chrome supports screen recorder w/o plugins.');
          this._appOptions = {
            chrome_extension_id: options.chrome_extension_id || 'meoefjkcilgjlkibnjjlfdgphacbeglk',
            chrome_extension_install_link: options
              .chrome_extension_install_link || 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk',
            opera_extension_id: options.opera_extension_id || 'dnnolmnenehhgplebjhbcmfdbaabkepm',
            opera_extension_install_link: options
              .opera_extension_install_link || 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
          };
        }

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
        this.recorderInstance = new ZiggeoApi.V2.Recorder({
          element: this._element,
          attrs: this.options
        }, this);
        if (typeof this.recorderInstance.activate === 'function') {
          this.recorderInstance.activate();
        } else {
          console.warn('Issue with launching recorder with Angular');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
      this.recorderInstance.destroy();
    }
  }
}
