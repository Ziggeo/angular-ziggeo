import { Injectable } from '@angular/core';
var ZiggeoPlayerService = /** @class */ (function () {
    function ZiggeoPlayerService() {
    }
    // Get Available Properties list
    ZiggeoPlayerService.prototype.getProperties = function () {
        return {
            width: 'number',
            height: 'number',
            responsive: 'boolean',
            skipinitial: 'boolean'
        };
    };
    // Get all events list
    ZiggeoPlayerService.prototype.getEvents = function () {
        return {
            attached: 'onAttached',
            loaded: 'onLoaded',
            playing: 'onPlaying',
            paused: 'onPaused',
            ended: 'onEnded',
            error: 'onError',
            seek: 'onSeek'
        };
    };
    ZiggeoPlayerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZiggeoPlayerService.ctorParameters = function () { return []; };
    return ZiggeoPlayerService;
}());
export { ZiggeoPlayerService };
//# sourceMappingURL=ziggeo-player.service.js.map