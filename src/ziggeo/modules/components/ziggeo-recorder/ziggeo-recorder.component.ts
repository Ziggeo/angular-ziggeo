import {
    Component,
    DoCheck,
    AfterViewInit,
    NgZone,
    OnDestroy,
    ViewChild,
    Input
} from '@angular/core';
import { ZiggeoRecorderService } from './ziggeo-recorder.service';

declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
    interface V2 {
        Application: any;
        Recorder: any;
    }
}

@Component({
    selector: 'ziggeo-recorder',
    providers: [ ZiggeoRecorderService ],
    template: `<div #ziggeorecorder [apiKey]="apiKey" [options]="options"></div>`
})
export class ZiggeoRecorderComponent implements DoCheck, AfterViewInit, OnDestroy {
    @ViewChild('ziggeorecorder') ziggeorecorder: any;
    @Input() apiKey: string;
    @Input() options: any = {};
    recorderInstance: any;
    private _application: object = null;
    private _events: any = {};
    private _app_options: any = {};

    constructor (private _ziggeoRecorderService: ZiggeoRecorderService, private ngZone: NgZone) {
        this._events = _ziggeoRecorderService.getEvents();
    }

    ngDoCheck () {
        if (this.apiKey && !this._application) {
            if(this.options.allowscreen) {
                this._app_options = {
                    'chrome_extension_id': this.options.chrome_extension_id || 'meoefjkcilgjlkibnjjlfdgphacbeglk',
                    'chrome_extension_install_link': this.options.chrome_extension_install_link || 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk',
                    'opera_extension_id': this.options.opera_extension_id || 'dnnolmnenehhgplebjhbcmfdbaabkepm',
                    'opera_extension_install_link': this.options.opera_extension_install_link || 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
                }
            }

            if (this.options.webrtc_streaming) {
                // (<any>Object).assign(this._app_options, { webrtc_streaming: true });
                this._app_options = {...this._app_options, webrtc_streaming: true };
            }

            if (this.options.auth) {
                this._app_options = {...this._app_options, auth: this.options.auth};
            }

            if (this.options.l10n) {
                ZiggeoApi.V2.Locale.setLocale(this.options.l10n);
            }

            this.ngZone.runOutsideAngular(() => {
                this._application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey, this._app_options);
            });
        }
    }

    ngAfterViewInit () {
        if (this._application) {
            this.recorderInstance = new ZiggeoApi.V2.Recorder({
                element: this.ziggeorecorder.nativeElement,
                attrs: this.options
            }, this);
            if (typeof this.recorderInstance.activate === 'function') {
                this.recorderInstance.activate();
            } else {
                console.warn('Issue with launching recorder with Angular');
            }
        }
    }

    ngOnDestroy () {
        if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
            this.recorderInstance.destroy();
        }
    }
}
