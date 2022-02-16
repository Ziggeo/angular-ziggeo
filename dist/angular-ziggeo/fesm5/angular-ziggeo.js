import { __decorate, __values, __read } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ElementRef, Renderer2, NgZone, Input, Output, Directive, ɵɵinject, Component, NgModule } from '@angular/core';

var ZiggeoPlayerConfig = /** @class */ (function () {
    function ZiggeoPlayerConfig() {
        this.debug = false;
    }
    ZiggeoPlayerConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoPlayerConfig_Factory() { return new ZiggeoPlayerConfig(); }, token: ZiggeoPlayerConfig, providedIn: "root" });
    ZiggeoPlayerConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], ZiggeoPlayerConfig);
    return ZiggeoPlayerConfig;
}());

var ZiggeoPlayerDirective = /** @class */ (function () {
    function ZiggeoPlayerDirective(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this._app_options = {};
        this._element = this.element.nativeElement;
    }
    ZiggeoPlayerDirective.prototype.ngDoCheck = function () {
        var e_1, _a;
        var _this = this;
        var apiKey = "" + this.apiKey;
        var options = this.options;
        if (apiKey && !this._application) {
            if (options) {
                try {
                    for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                        if (options[key] !== undefined && typeof options[key] === typeof value) {
                            this._appOptions[key] = options[key];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (options.l10n) {
                    ZiggeoApi.V2.Locale.setLocale(options.l10n);
                }
            }
            this.ngZone.runOutsideAngular(function () {
                _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._app_options);
            });
        }
    };
    ZiggeoPlayerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._application) {
            this.ngZone.runOutsideAngular(function () {
                // Prevent during every change detection run ngDoCheck method
                _this.playerInstance = new ZiggeoApi.V2.Player({
                    element: _this._element,
                    attrs: _this.options
                }, _this);
                if (typeof _this.playerInstance.activate === 'function') {
                    _this.playerInstance.activate();
                }
                else {
                    console.warn('Issue with launching player with Angular');
                }
            });
        }
    };
    ZiggeoPlayerDirective.prototype.ngOnDestroy = function () {
        if (this.playerInstance && typeof this.playerInstance.destroy === 'function') {
            this.playerInstance.destroy();
        }
    };
    ZiggeoPlayerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ZiggeoPlayerConfig }
    ]; };
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
    return ZiggeoPlayerDirective;
}());

/**
 * ZiggeoPlayer
 */
var ZiggeoPlayerComponent = /** @class */ (function () {
    function ZiggeoPlayerComponent(player) {
        this.player = player;
    }
    ZiggeoPlayerComponent.ctorParameters = function () { return [
        { type: ZiggeoPlayerDirective }
    ]; };
    ZiggeoPlayerComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoPlayerComponent_Factory() { return new ZiggeoPlayerComponent(ɵɵinject(ZiggeoPlayerDirective)); }, token: ZiggeoPlayerComponent, providedIn: "root" });
    ZiggeoPlayerComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-player',
            template: "<div></div>"
        })
    ], ZiggeoPlayerComponent);
    return ZiggeoPlayerComponent;
}());

var ZiggeoPlayerModule = /** @class */ (function () {
    function ZiggeoPlayerModule() {
    }
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
    return ZiggeoPlayerModule;
}());

var ZiggeoRecorderConfig = /** @class */ (function () {
    function ZiggeoRecorderConfig() {
        this.webrtc_streaming = false;
        this.webrtc_streaming_if_necessary = false;
        this.webrtc_on_mobile = false;
        this.debug = false;
    }
    ZiggeoRecorderConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoRecorderConfig_Factory() { return new ZiggeoRecorderConfig(); }, token: ZiggeoRecorderConfig, providedIn: "root" });
    ZiggeoRecorderConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], ZiggeoRecorderConfig);
    return ZiggeoRecorderConfig;
}());

var ZiggeoRecorderDirective = /** @class */ (function () {
    function ZiggeoRecorderDirective(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this.config = config;
        this._element = this.element.nativeElement;
    }
    ZiggeoRecorderDirective.prototype.ngDoCheck = function () {
        var e_1, _a;
        var _this = this;
        var apiKey = "" + this.apiKey;
        var options = this.options;
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
                try {
                    for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                        if (options[key] !== undefined && typeof options[key] === typeof value) {
                            this._appOptions[key] = options[key];
                        }
                        else if (typeof this.config[key] !== 'undefined') {
                            // Set default values
                            this._appOptions[key] = this.config[key];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (options.l10n) {
                    ZiggeoApi.V2.Locale.setLocale(options.l10n);
                }
            }
            this.ngZone.runOutsideAngular(function () {
                _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._appOptions);
            });
        }
    };
    ZiggeoRecorderDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._application) {
            this.ngZone.runOutsideAngular(function () {
                // Prevent during every change detection run ngDoCheck method
                _this.recorderInstance = new ZiggeoApi.V2.Recorder({
                    element: _this._element,
                    attrs: _this.options
                }, _this);
                if (typeof _this.recorderInstance.activate === 'function') {
                    _this.recorderInstance.activate();
                }
                else {
                    console.warn('Issue with launching recorder with Angular');
                }
            });
        }
    };
    ZiggeoRecorderDirective.prototype.ngOnDestroy = function () {
        if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
            this.recorderInstance.destroy();
        }
    };
    ZiggeoRecorderDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ZiggeoRecorderConfig }
    ]; };
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
    return ZiggeoRecorderDirective;
}());

/**
 * ZiggeoRecorder
 */
var ZiggeoRecorderComponent = /** @class */ (function () {
    function ZiggeoRecorderComponent(recorder) {
        this.recorder = recorder;
    }
    ZiggeoRecorderComponent.ctorParameters = function () { return [
        { type: ZiggeoRecorderDirective }
    ]; };
    ZiggeoRecorderComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoRecorderComponent_Factory() { return new ZiggeoRecorderComponent(ɵɵinject(ZiggeoRecorderDirective)); }, token: ZiggeoRecorderComponent, providedIn: "root" });
    ZiggeoRecorderComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-recorder',
            template: "<div #ziggeorecorder ></div>"
        })
    ], ZiggeoRecorderComponent);
    return ZiggeoRecorderComponent;
}());

var ZiggeoRecorderModule = /** @class */ (function () {
    function ZiggeoRecorderModule() {
    }
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
    return ZiggeoRecorderModule;
}());

var ZiggeoAudioPlayerConfig = /** @class */ (function () {
    function ZiggeoAudioPlayerConfig() {
        this.debug = false;
    }
    ZiggeoAudioPlayerConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioPlayerConfig_Factory() { return new ZiggeoAudioPlayerConfig(); }, token: ZiggeoAudioPlayerConfig, providedIn: "root" });
    ZiggeoAudioPlayerConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], ZiggeoAudioPlayerConfig);
    return ZiggeoAudioPlayerConfig;
}());

var ZiggeoAudioPlayerDirective = /** @class */ (function () {
    function ZiggeoAudioPlayerDirective(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this._app_options = {};
        this._element = this.element.nativeElement;
    }
    ZiggeoAudioPlayerDirective.prototype.ngDoCheck = function () {
        var e_1, _a;
        var _this = this;
        var apiKey = "" + this.apiKey;
        var options = this.options;
        if (apiKey && !this._application) {
            if (options) {
                try {
                    for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                        if (options[key] !== undefined && typeof options[key] === typeof value) {
                            this._appOptions[key] = options[key];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (options.l10n) {
                    ZiggeoApi.V2.Locale.setLocale(options.l10n);
                }
            }
            this.ngZone.runOutsideAngular(function () {
                _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._app_options);
            });
        }
    };
    ZiggeoAudioPlayerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._application) {
            this.ngZone.runOutsideAngular(function () {
                // Prevent during every change detection run ngDoCheck method
                _this.audioPlayerInstance = new ZiggeoApi.V2.AudioPlayer({
                    element: _this._element,
                    attrs: _this.options
                }, _this);
                if (typeof _this.audioPlayerInstance.activate === 'function') {
                    _this.audioPlayerInstance.activate();
                }
                else {
                    console.warn('Issue with launching audio player with Angular');
                }
            });
        }
    };
    ZiggeoAudioPlayerDirective.prototype.ngOnDestroy = function () {
        if (this.audioPlayerInstance && typeof this.audioPlayerInstance.destroy === 'function') {
            this.audioPlayerInstance.destroy();
        }
    };
    ZiggeoAudioPlayerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ZiggeoAudioPlayerConfig }
    ]; };
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
    return ZiggeoAudioPlayerDirective;
}());

/**
 * ZiggeoAudioPlayer
 */
var ZiggeoAudioPlayerComponent = /** @class */ (function () {
    function ZiggeoAudioPlayerComponent(audioPlayer) {
        this.audioPlayer = audioPlayer;
    }
    ZiggeoAudioPlayerComponent.ctorParameters = function () { return [
        { type: ZiggeoAudioPlayerDirective }
    ]; };
    ZiggeoAudioPlayerComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioPlayerComponent_Factory() { return new ZiggeoAudioPlayerComponent(ɵɵinject(ZiggeoAudioPlayerDirective)); }, token: ZiggeoAudioPlayerComponent, providedIn: "root" });
    ZiggeoAudioPlayerComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-audio-player',
            // TODO: check the same in player why #selector is missing
            template: "<div #ziggeoaudioplayer></div>"
        })
    ], ZiggeoAudioPlayerComponent);
    return ZiggeoAudioPlayerComponent;
}());

var ZiggeoAudioPlayerModule = /** @class */ (function () {
    function ZiggeoAudioPlayerModule() {
    }
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
    return ZiggeoAudioPlayerModule;
}());

var ZiggeoAudioRecorderConfig = /** @class */ (function () {
    function ZiggeoAudioRecorderConfig() {
        this.webrtc_streaming = false;
        this.webrtc_streaming_if_necessary = false;
        this.webrtc_on_mobile = false;
        this.debug = false;
    }
    ZiggeoAudioRecorderConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioRecorderConfig_Factory() { return new ZiggeoAudioRecorderConfig(); }, token: ZiggeoAudioRecorderConfig, providedIn: "root" });
    ZiggeoAudioRecorderConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], ZiggeoAudioRecorderConfig);
    return ZiggeoAudioRecorderConfig;
}());

var ZiggeoAudioRecorderDirective = /** @class */ (function () {
    function ZiggeoAudioRecorderDirective(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this.config = config;
        this._element = this.element.nativeElement;
    }
    ZiggeoAudioRecorderDirective.prototype.ngDoCheck = function () {
        var e_1, _a;
        var _this = this;
        var apiKey = "" + this.apiKey;
        var options = this.options;
        if (apiKey && !this._application) {
            if (options) {
                try {
                    for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                        if (options[key] !== undefined && typeof options[key] === typeof value) {
                            this._appOptions[key] = options[key];
                        }
                        else if (typeof this.config[key] !== 'undefined') {
                            // Set default values
                            this._appOptions[key] = this.config[key];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (options.l10n) {
                    ZiggeoApi.V2.Locale.setLocale(options.l10n);
                }
            }
            this.ngZone.runOutsideAngular(function () {
                _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._appOptions);
            });
        }
    };
    ZiggeoAudioRecorderDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._application) {
            this.ngZone.runOutsideAngular(function () {
                // Prevent during every change detection run ngDoCheck method
                _this.audioRecorderInstance = new ZiggeoApi.V2.AudioRecorder({
                    element: _this._element,
                    attrs: _this.options
                }, _this);
                if (typeof _this.audioRecorderInstance.activate === 'function') {
                    _this.audioRecorderInstance.activate();
                }
                else {
                    console.warn('Issue with launching audio recorder with Angular');
                }
            });
        }
    };
    ZiggeoAudioRecorderDirective.prototype.ngOnDestroy = function () {
        if (this.audioRecorderInstance && typeof this.audioRecorderInstance.destroy === 'function') {
            this.audioRecorderInstance.destroy();
        }
    };
    ZiggeoAudioRecorderDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ZiggeoAudioRecorderConfig }
    ]; };
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
    return ZiggeoAudioRecorderDirective;
}());

/**
 * ZiggeoRecorder
 */
var ZiggeoAudioRecorderComponent = /** @class */ (function () {
    function ZiggeoAudioRecorderComponent(audioRecorder) {
        this.audioRecorder = audioRecorder;
    }
    ZiggeoAudioRecorderComponent.ctorParameters = function () { return [
        { type: ZiggeoAudioRecorderDirective }
    ]; };
    ZiggeoAudioRecorderComponent.ɵprov = ɵɵdefineInjectable({ factory: function ZiggeoAudioRecorderComponent_Factory() { return new ZiggeoAudioRecorderComponent(ɵɵinject(ZiggeoAudioRecorderDirective)); }, token: ZiggeoAudioRecorderComponent, providedIn: "root" });
    ZiggeoAudioRecorderComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-audio-recorder',
            template: "<div #ziggeoaudiorecorder ></div>"
        })
    ], ZiggeoAudioRecorderComponent);
    return ZiggeoAudioRecorderComponent;
}());

var ZiggeoAudioRecorderModule = /** @class */ (function () {
    function ZiggeoAudioRecorderModule() {
    }
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
    return ZiggeoAudioRecorderModule;
}());

var ZIGGEO_MODULES = [
    ZiggeoPlayerModule,
    ZiggeoRecorderModule,
    ZiggeoAudioPlayerModule,
    ZiggeoAudioRecorderModule,
];
var ZiggeoModule = /** @class */ (function () {
    function ZiggeoModule() {
    }
    ZiggeoModule = __decorate([
        NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
    ], ZiggeoModule);
    return ZiggeoModule;
}());

/** Export player */

/**
 * Generated bundle index. Do not edit.
 */

export { ZiggeoAudioPlayerComponent, ZiggeoAudioPlayerDirective, ZiggeoAudioPlayerModule, ZiggeoAudioRecorderComponent, ZiggeoAudioRecorderDirective, ZiggeoAudioRecorderModule, ZiggeoModule, ZiggeoPlayerComponent, ZiggeoPlayerDirective, ZiggeoPlayerModule, ZiggeoRecorderComponent, ZiggeoRecorderDirective, ZiggeoRecorderModule, ZiggeoPlayerConfig as ɵa, ZiggeoRecorderConfig as ɵb, ZiggeoAudioPlayerConfig as ɵc, ZiggeoAudioRecorderConfig as ɵd };
//# sourceMappingURL=angular-ziggeo.js.map
