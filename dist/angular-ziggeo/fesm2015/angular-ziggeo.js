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

let ZiggeoAudioPlayerConfig = class ZiggeoAudioPlayerConfig {
    constructor() {
        this.debug = false;
    }
};
ZiggeoAudioPlayerConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioPlayerConfig_Factory() { return new ZiggeoAudioPlayerConfig(); }, token: ZiggeoAudioPlayerConfig, providedIn: "root" });
ZiggeoAudioPlayerConfig = __decorate([
    Injectable({ providedIn: 'root' })
], ZiggeoAudioPlayerConfig);

let ZiggeoAudioPlayerDirective = class ZiggeoAudioPlayerDirective {
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
                this.audioPlayerInstance = new ZiggeoApi.V2.AudioPlayer({
                    element: this._element,
                    attrs: this.options
                }, this);
                if (typeof this.audioPlayerInstance.activate === 'function') {
                    this.audioPlayerInstance.activate();
                }
                else {
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
};
ZiggeoAudioPlayerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoAudioPlayerConfig }
];
__decorate([
    Input()
], ZiggeoAudioPlayerDirective.prototype, "apiKey", void 0);
__decorate([
    Input()
], ZiggeoAudioPlayerDirective.prototype, "options", void 0);
__decorate([
    Output()
], ZiggeoAudioPlayerDirective.prototype, "audioPlayerInstance", void 0);
ZiggeoAudioPlayerDirective = __decorate([
    Directive({
        selector: 'ziggeoaudioplayer, ziggeo-audio-player[apiKey], ziggeo-audio-player[options]'
    })
], ZiggeoAudioPlayerDirective);

/**
 * ZiggeoAudioPlayer
 */
let ZiggeoAudioPlayerComponent = class ZiggeoAudioPlayerComponent {
    constructor(audioPlayer) {
        this.audioPlayer = audioPlayer;
    }
};
ZiggeoAudioPlayerComponent.ctorParameters = () => [
    { type: ZiggeoAudioPlayerDirective }
];
ZiggeoAudioPlayerComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioPlayerComponent_Factory() { return new ZiggeoAudioPlayerComponent(ɵɵinject(ZiggeoAudioPlayerDirective)); }, token: ZiggeoAudioPlayerComponent, providedIn: "root" });
ZiggeoAudioPlayerComponent = __decorate([
    Injectable({ providedIn: 'root' }),
    Component({
        selector: 'ziggeo-audio-player',
        // TODO: check the same in player why #selector is missing
        template: `<div #ziggeoaudioplayer></div>`
    })
], ZiggeoAudioPlayerComponent);

let ZiggeoAudioPlayerModule = class ZiggeoAudioPlayerModule {
};
ZiggeoAudioPlayerModule = __decorate([
    NgModule({
        declarations: [
            ZiggeoAudioPlayerComponent,
            ZiggeoAudioPlayerDirective
        ],
        exports: [
            ZiggeoAudioPlayerComponent,
            ZiggeoAudioPlayerDirective
        ],
        providers: []
    })
], ZiggeoAudioPlayerModule);

let ZiggeoAudioRecorderConfig = class ZiggeoAudioRecorderConfig {
    constructor() {
        this.webrtc_streaming = false;
        this.webrtc_streaming_if_necessary = false;
        this.webrtc_on_mobile = false;
        this.debug = false;
    }
};
ZiggeoAudioRecorderConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioRecorderConfig_Factory() { return new ZiggeoAudioRecorderConfig(); }, token: ZiggeoAudioRecorderConfig, providedIn: "root" });
ZiggeoAudioRecorderConfig = __decorate([
    Injectable({ providedIn: 'root' })
], ZiggeoAudioRecorderConfig);

let ZiggeoAudioRecorderDirective = class ZiggeoAudioRecorderDirective {
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
                this.audioRecorderInstance = new ZiggeoApi.V2.AudioRecorder({
                    element: this._element,
                    attrs: this.options
                }, this);
                if (typeof this.audioRecorderInstance.activate === 'function') {
                    this.audioRecorderInstance.activate();
                }
                else {
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
};
ZiggeoAudioRecorderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoAudioRecorderConfig }
];
__decorate([
    Input()
], ZiggeoAudioRecorderDirective.prototype, "apiKey", void 0);
__decorate([
    Input()
], ZiggeoAudioRecorderDirective.prototype, "options", void 0);
__decorate([
    Output()
], ZiggeoAudioRecorderDirective.prototype, "audioRecorderInstance", void 0);
ZiggeoAudioRecorderDirective = __decorate([
    Directive({
        exportAs: 'ziggeoaudiorecorder',
        selector: 'ziggeoaudiorecorder, ziggeo-audio-recorder[apiKey], ziggeo-audio-recorder[options]'
    })
], ZiggeoAudioRecorderDirective);

/**
 * ZiggeoRecorder
 */
let ZiggeoAudioRecorderComponent = class ZiggeoAudioRecorderComponent {
    constructor(audioRecorder) {
        this.audioRecorder = audioRecorder;
    }
};
ZiggeoAudioRecorderComponent.ctorParameters = () => [
    { type: ZiggeoAudioRecorderDirective }
];
ZiggeoAudioRecorderComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioRecorderComponent_Factory() { return new ZiggeoAudioRecorderComponent(ɵɵinject(ZiggeoAudioRecorderDirective)); }, token: ZiggeoAudioRecorderComponent, providedIn: "root" });
ZiggeoAudioRecorderComponent = __decorate([
    Injectable({ providedIn: 'root' }),
    Component({
        selector: 'ziggeo-audio-recorder',
        template: `<div #ziggeoaudiorecorder ></div>`
    })
], ZiggeoAudioRecorderComponent);

let ZiggeoAudioRecorderModule = class ZiggeoAudioRecorderModule {
};
ZiggeoAudioRecorderModule = __decorate([
    NgModule({
        declarations: [
            ZiggeoAudioRecorderComponent,
            ZiggeoAudioRecorderDirective
        ],
        exports: [
            ZiggeoAudioRecorderComponent,
            ZiggeoAudioRecorderDirective
        ],
        providers: []
    })
], ZiggeoAudioRecorderModule);

const ZIGGEO_MODULES = [
    ZiggeoPlayerModule,
    ZiggeoRecorderModule,
    ZiggeoAudioPlayerModule,
    ZiggeoAudioRecorderModule,
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

export { ZiggeoAudioPlayerComponent, ZiggeoAudioPlayerDirective, ZiggeoAudioPlayerModule, ZiggeoAudioRecorderComponent, ZiggeoAudioRecorderDirective, ZiggeoAudioRecorderModule, ZiggeoModule, ZiggeoPlayerComponent, ZiggeoPlayerDirective, ZiggeoPlayerModule, ZiggeoRecorderComponent, ZiggeoRecorderDirective, ZiggeoRecorderModule, ZiggeoPlayerConfig as ɵa, ZiggeoRecorderConfig as ɵb, ZiggeoAudioPlayerConfig as ɵc, ZiggeoAudioRecorderConfig as ɵd };
//# sourceMappingURL=angular-ziggeo.js.map
