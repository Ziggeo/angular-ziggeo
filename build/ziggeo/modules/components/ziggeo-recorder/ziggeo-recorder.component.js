var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, NgZone, ViewChild, Input } from '@angular/core';
import { ZiggeoRecorderService } from './ziggeo-recorder.service';
var ZiggeoRecorderComponent = /** @class */ (function () {
    function ZiggeoRecorderComponent(_ziggeoRecorderService, ngZone) {
        this._ziggeoRecorderService = _ziggeoRecorderService;
        this.ngZone = ngZone;
        this.options = {};
        this._application = null;
        this._events = {};
        this._app_options = {};
        this._events = _ziggeoRecorderService.getEvents();
    }
    ZiggeoRecorderComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.apiKey && !this._application) {
            if (this.options.allowscreen) {
                this._app_options = {
                    'chrome_extension_id': this.options.chrome_extension_id || 'meoefjkcilgjlkibnjjlfdgphacbeglk',
                    'chrome_extension_install_link': this.options.chrome_extension_install_link || 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk',
                    'opera_extension_id': this.options.opera_extension_id || 'dnnolmnenehhgplebjhbcmfdbaabkepm',
                    'opera_extension_install_link': this.options.opera_extension_install_link || 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
                };
            }
            if (this.options.webrtc_streaming) {
                // (<any>Object).assign(this._app_options, { webrtc_streaming: true });
                this._app_options = __assign({}, this._app_options, { webrtc_streaming: true });
            }
            if (this.options.auth) {
                this._app_options = __assign({}, this._app_options, { auth: this.options.auth });
            }
            if (this.options.l10n) {
                ZiggeoApi.V2.Locale.setLocale(this.options.l10n);
            }
            this.ngZone.runOutsideAngular(function () {
                _this._application = ZiggeoApi.V2.Application.instanceByToken(_this.apiKey, _this._app_options);
            });
        }
    };
    ZiggeoRecorderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._application) {
            this.ngZone.runOutsideAngular(function () {
                _this.recorderInstance = new ZiggeoApi.V2.Recorder({
                    element: _this.ziggeorecorder.nativeElement,
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
    ZiggeoRecorderComponent.prototype.ngOnDestroy = function () {
        if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
            this.recorderInstance.destroy();
        }
    };
    ZiggeoRecorderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ziggeo-recorder',
                    providers: [ZiggeoRecorderService],
                    template: "<div #ziggeorecorder [apiKey]=\"apiKey\" [options]=\"options\"></div>"
                },] },
    ];
    /** @nocollapse */
    ZiggeoRecorderComponent.ctorParameters = function () { return [
        { type: ZiggeoRecorderService, },
        { type: NgZone, },
    ]; };
    ZiggeoRecorderComponent.propDecorators = {
        'ziggeorecorder': [{ type: ViewChild, args: ['ziggeorecorder',] },],
        'apiKey': [{ type: Input },],
        'options': [{ type: Input },],
    };
    return ZiggeoRecorderComponent;
}());
export { ZiggeoRecorderComponent };
//# sourceMappingURL=ziggeo-recorder.component.js.map