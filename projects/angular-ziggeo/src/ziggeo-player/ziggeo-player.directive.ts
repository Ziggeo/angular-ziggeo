import {
  Directive, DoCheck, ElementRef, Input, NgZone,
  Renderer2, AfterViewInit, OnDestroy, Output
} from '@angular/core';
import {ZiggeoPlayerConfig} from './ziggeo-player.config';

// ZiggeoApi
declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
  interface V2 {
    Application: any;
    Player: any;
  }
}

@Directive({
  selector: 'ziggeoplayer, ziggeo-player[apiKey], ziggeo-player[options]'
})
export class ZiggeoPlayerDirective implements AfterViewInit, DoCheck, OnDestroy {

  public _element: any;
  private _application: any = null;
  private _appOptions: any = {};
  private _app_options: any = {};
  @Input() public apiKey: string;
  @Input() public options: any;
  @Output() public playerInstance: any;

  constructor(
    private element: ElementRef, private renderer: Renderer2,
    private ngZone: NgZone, private readonly config: ZiggeoPlayerConfig
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
        this.playerInstance = new ZiggeoApi.V2.Player({
          element: this._element,
          attrs: this.options
        }, this);
        if (typeof this.playerInstance.activate === 'function') {
          this.playerInstance.activate();
        } else {
          console.warn('Issue with launching player with Angular');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.playerInstance && typeof this.playerInstance.destroy === 'function') {
      this.playerInstance.destroy();
    }
  }
}
