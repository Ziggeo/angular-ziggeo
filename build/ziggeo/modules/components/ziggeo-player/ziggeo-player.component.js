var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, ViewChild, Input } from '@angular/core';
import { ZiggeoPlayerService } from './ziggeo-player.service';
var ZiggeoPlayerComponent = /** @class */ (function () {
    function ZiggeoPlayerComponent(_ziggeoPlayerService) {
        this._ziggeoPlayerService = _ziggeoPlayerService;
        this.options = {};
        this._events = {};
        this._application = null;
        this._app_options = {};
        this._events = _ziggeoPlayerService.getEvents();
    }
    ZiggeoPlayerComponent.prototype.ngDoCheck = function () {
        if (this.apiKey && !this._application) {
            if (this.options.auth) {
                this._app_options = __assign({}, this._app_options, { auth: false });
            }
            if (this.options.l10n) {
                ZiggeoApi.V2.Locale.setLocale(this.options.l10n);
            }
            this._application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        }
    };
    ZiggeoPlayerComponent.prototype.ngAfterViewInit = function () {
        if (this._application) {
            this.playerInstance = new ZiggeoApi.V2.Player({
                element: this.ziggeoplayer.nativeElement,
                attrs: this.options
            }, this);
            if (typeof this.playerInstance.activate === 'function') {
                this.playerInstance.activate();
            }
            else {
                console.warn('Issue with launching player');
            }
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