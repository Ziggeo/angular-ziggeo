import { Component, ViewChild, Input } from '@angular/core';
import { ZiggeoPlayerService } from './ziggeo-player.service';
var ZiggeoPlayerComponent = /** @class */ (function () {
    function ZiggeoPlayerComponent(_ziggeoPlayerService) {
        this._ziggeoPlayerService = _ziggeoPlayerService;
        this.options = {};
        this._events = {};
        this._application = null;
        this._events = _ziggeoPlayerService.getEvents();
    }
    ZiggeoPlayerComponent.prototype.ngDoCheck = function () {
        if (this.apiKey && !this._application) {
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