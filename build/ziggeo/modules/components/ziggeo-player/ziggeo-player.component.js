var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, ViewChild, Input, NgZone } from '@angular/core';
import { ZiggeoPlayerService } from './ziggeo-player.service';
var ZiggeoPlayerComponent = /** @class */ (function () {
    function ZiggeoPlayerComponent(_ziggeoPlayerService, ngZone) {
        this._ziggeoPlayerService = _ziggeoPlayerService;
        this.ngZone = ngZone;
        this.options = {};
        this._events = {};
        this._application = null;
        this._app_options = {};
        this._events = _ziggeoPlayerService.getEvents();
    }
    ZiggeoPlayerComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.apiKey && !this._application) {
            if (this.options.auth) {
                // (<any>Object).assign(this._app_options, { auth: this.options.auth });
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
    ZiggeoPlayerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._application) {
            this.ngZone.runOutsideAngular(function () {
                _this.playerInstance = new ZiggeoApi.V2.Player({
                    element: _this.ziggeoplayer.nativeElement,
                    attrs: _this.options
                }, _this);
                if (typeof _this.playerInstance.activate === 'function') {
                    _this.playerInstance.activate();
                }
                else {
                    console.warn('Issue with launching player');
                }
            });
        }
    };
    ZiggeoPlayerComponent.prototype.ngOnDestroy = function () {
        if (this.playerInstance && typeof this.playerInstance.destroy === 'function') {
            this.playerInstance.destroy();
        }
    };
    ZiggeoPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ziggeo-player',
                    providers: [ZiggeoPlayerService],
                    template: "<div #ziggeoplayer [apiKey]=\"apiKey\" [options]=\"options\"></div>"
                },] },
    ];
    /** @nocollapse */
    ZiggeoPlayerComponent.ctorParameters = function () { return [
        { type: ZiggeoPlayerService, },
        { type: NgZone, },
    ]; };
    ZiggeoPlayerComponent.propDecorators = {
        'ziggeoplayer': [{ type: ViewChild, args: ['ziggeoplayer',] },],
        'options': [{ type: Input },],
        'apiKey': [{ type: Input },],
    };
    return ZiggeoPlayerComponent;
}());
export { ZiggeoPlayerComponent };
//# sourceMappingURL=ziggeo-player.component.js.map