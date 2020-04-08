import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ElementRef, Renderer2, NgZone, Input, Output, Directive, ɵɵinject, Component, NgModule } from '@angular/core';

let ZiggeoPlayerConfig = class ZiggeoPlayerConfig {
    constructor() {
        this.debug = false;
    }
};
ZiggeoPlayerConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoPlayerConfig_Factory() { return new ZiggeoPlayerConfig(); }, token: ZiggeoPlayerConfig, providedIn: "root" });
ZiggeoPlayerConfig = __decorate([
    Injectable({ providedIn: 'root' })
], ZiggeoPlayerConfig);

let ZiggeoPlayerDirective = class ZiggeoPlayerDirective {
    constructor(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this._app_options = {};
        this._element = this.element.nativeElement;
    }
    ngDoCheck() {
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
                }
                else {
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
};
ZiggeoPlayerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoPlayerConfig }
];
__decorate([
    Input()
], ZiggeoPlayerDirective.prototype, "apiKey", void 0);
__decorate([
    Input()
], ZiggeoPlayerDirective.prototype, "options", void 0);
__decorate([
    Output()
], ZiggeoPlayerDirective.prototype, "playerInstance", void 0);
ZiggeoPlayerDirective = __decorate([
    Directive({
        selector: 'ziggeoplayer, ziggeo-player[apiKey], ziggeo-player[options]'
    })
], ZiggeoPlayerDirective);

/**
 * ZiggeoPlayer
 */
let ZiggeoPlayerComponent = class ZiggeoPlayerComponent {
    constructor(player) {
        this.player = player;
    }
};
ZiggeoPlayerComponent.ctorParameters = () => [
    { type: ZiggeoPlayerDirective }
];
ZiggeoPlayerComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoPlayerComponent_Factory() { return new ZiggeoPlayerComponent(ɵɵinject(ZiggeoPlayerDirective)); }, token: ZiggeoPlayerComponent, providedIn: "root" });
ZiggeoPlayerComponent = __decorate([
    Injectable({ providedIn: 'root' }),
    Component({
        selector: 'ziggeo-player',
        template: `<div></div>`
    })
], ZiggeoPlayerComponent);

let ZiggeoPlayerModule = class ZiggeoPlayerModule {
};
ZiggeoPlayerModule = __decorate([
    NgModule({
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
], ZiggeoPlayerModule);

let ZiggeoRecorderConfig = class ZiggeoRecorderConfig {
    constructor() {
        this.webrtc_streaming = false;
        this.webrtc_streaming_if_necessary = false;
        this.webrtc_on_mobile = false;
        this.debug = false;
    }
};
ZiggeoRecorderConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoRecorderConfig_Factory() { return new ZiggeoRecorderConfig(); }, token: ZiggeoRecorderConfig, providedIn: "root" });
ZiggeoRecorderConfig = __decorate([
    Injectable({ providedIn: 'root' })
], ZiggeoRecorderConfig);

let ZiggeoRecorderDirective = class ZiggeoRecorderDirective {
    constructor(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this.config = config;
        this._element = this.element.nativeElement;
    }
    ngDoCheck() {
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
                    }
                    else if (typeof this.config[key] !== 'undefined') {
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
                }
                else {
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
};
ZiggeoRecorderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoRecorderConfig }
];
__decorate([
    Input()
], ZiggeoRecorderDirective.prototype, "apiKey", void 0);
__decorate([
    Input()
], ZiggeoRecorderDirective.prototype, "options", void 0);
__decorate([
    Output()
], ZiggeoRecorderDirective.prototype, "recorderInstance", void 0);
ZiggeoRecorderDirective = __decorate([
    Directive({
        exportAs: 'ziggeorecorder',
        selector: 'ziggeorecorder, ziggeo-recorder[apiKey], ziggeo-recorder[options]'
    })
], ZiggeoRecorderDirective);

/**
 * ZiggeoRecorder
 */
let ZiggeoRecorderComponent = class ZiggeoRecorderComponent {
    constructor(recorder) {
        this.recorder = recorder;
    }
};
ZiggeoRecorderComponent.ctorParameters = () => [
    { type: ZiggeoRecorderDirective }
];
ZiggeoRecorderComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoRecorderComponent_Factory() { return new ZiggeoRecorderComponent(ɵɵinject(ZiggeoRecorderDirective)); }, token: ZiggeoRecorderComponent, providedIn: "root" });
ZiggeoRecorderComponent = __decorate([
    Injectable({ providedIn: 'root' }),
    Component({
        selector: 'ziggeo-recorder',
        template: `<div #ziggeorecorder ></div>`
    })
], ZiggeoRecorderComponent);

let ZiggeoRecorderModule = class ZiggeoRecorderModule {
};
ZiggeoRecorderModule = __decorate([
    NgModule({
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
], ZiggeoRecorderModule);

const ZIGGEO_MODULES = [
    ZiggeoPlayerModule,
    ZiggeoRecorderModule
];
let ZiggeoModule = class ZiggeoModule {
};
ZiggeoModule = __decorate([
    NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
], ZiggeoModule);

/** Export player */

/**
 * Generated bundle index. Do not edit.
 */

export { ZiggeoModule, ZiggeoPlayerComponent, ZiggeoPlayerDirective, ZiggeoPlayerModule, ZiggeoRecorderComponent, ZiggeoRecorderDirective, ZiggeoRecorderModule, ZiggeoPlayerConfig as ɵa, ZiggeoRecorderConfig as ɵb };
//# sourceMappingURL=angular-ziggeo.js.map
