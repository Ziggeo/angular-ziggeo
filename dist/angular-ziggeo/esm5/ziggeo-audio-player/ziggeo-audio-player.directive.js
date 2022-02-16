import { __decorate, __read, __values } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoAudioPlayerConfig } from './ziggeo-audio-player.config';
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
export { ZiggeoAudioPlayerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXBsYXllci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1hdWRpby1wbGF5ZXIvemlnZ2VvLWF1ZGlvLXBsYXllci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBY3JFO0lBVUUsb0NBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQStCO1FBRGhFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFUbEUsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFTN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOENBQVMsR0FBVDs7UUFBQSxpQkFxQkM7UUFwQkMsSUFBTSxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2hDLElBQUksT0FBTyxFQUFFOztvQkFDWCxLQUEyQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBN0MsSUFBQSx3QkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxLQUFLLEVBQUU7NEJBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0QztxQkFDRjs7Ozs7Ozs7O2dCQUVELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtvQkFDaEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxvREFBZSxHQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsNkRBQTZEO2dCQUM3RCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDdEQsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRO29CQUN0QixLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU87aUJBQ3BCLEVBQUUsS0FBSSxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO29CQUMzRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztpQkFDaEU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ3RGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQWxEa0IsVUFBVTtnQkFBb0IsU0FBUztnQkFDeEMsTUFBTTtnQkFBMkIsdUJBQXVCOztJQU5qRTtRQUFSLEtBQUssRUFBRTs4REFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7K0RBQXFCO0lBQ25CO1FBQVQsTUFBTSxFQUFFOzJFQUFpQztJQVIvQiwwQkFBMEI7UUFIdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhFQUE4RTtTQUN6RixDQUFDO09BQ1csMEJBQTBCLENBOER0QztJQUFELGlDQUFDO0NBQUEsQUE5REQsSUE4REM7U0E5RFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLFxuICBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtaaWdnZW9BdWRpb1BsYXllckNvbmZpZ30gZnJvbSAnLi96aWdnZW8tYXVkaW8tcGxheWVyLmNvbmZpZyc7XG5cbi8vIFppZ2dlb0FwaVxuZGVjbGFyZSBjb25zdCBaaWdnZW9BcGk6IGFueTtcbmRlY2xhcmUgbmFtZXNwYWNlIFppZ2dlb0FwaS5WMiB7XG4gIGludGVyZmFjZSBWMiB7XG4gICAgQXBwbGljYXRpb246IGFueTtcbiAgICBBdWRpb1BsYXllcjogYW55O1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3ppZ2dlb2F1ZGlvcGxheWVyLCB6aWdnZW8tYXVkaW8tcGxheWVyW2FwaUtleV0sIHppZ2dlby1hdWRpby1wbGF5ZXJbb3B0aW9uc10nXG59KVxuZXhwb3J0IGNsYXNzIFppZ2dlb0F1ZGlvUGxheWVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcblxuICBwdWJsaWMgX2VsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb246IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2FwcE9wdGlvbnM6IGFueSA9IHt9O1xuICBwcml2YXRlIF9hcHBfb3B0aW9uczogYW55ID0ge307XG4gIEBJbnB1dCgpIHB1YmxpYyBhcGlLZXk6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgQE91dHB1dCgpIHB1YmxpYyBhdWRpb1BsYXllckluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IFppZ2dlb0F1ZGlvUGxheWVyQ29uZmlnXG4gICkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBjb25zdCBhcGlLZXkgPSBgJHt0aGlzLmFwaUtleX1gO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoYXBpS2V5ICYmICF0aGlzLl9hcHBsaWNhdGlvbikge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5jb25maWcpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNba2V5XSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zW2tleV0gPT09IHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYXBwT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmwxMG4pIHtcbiAgICAgICAgICBaaWdnZW9BcGkuVjIuTG9jYWxlLnNldExvY2FsZShvcHRpb25zLmwxMG4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBaaWdnZW9BcGkuVjIuQXBwbGljYXRpb24uaW5zdGFuY2VCeVRva2VuKGFwaUtleSwgdGhpcy5fYXBwX29wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvbikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBQcmV2ZW50IGR1cmluZyBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBuZ0RvQ2hlY2sgbWV0aG9kXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJJbnN0YW5jZSA9IG5ldyBaaWdnZW9BcGkuVjIuQXVkaW9QbGF5ZXIoe1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQsXG4gICAgICAgICAgYXR0cnM6IHRoaXMub3B0aW9uc1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1ZGlvUGxheWVySW5zdGFuY2UuYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmF1ZGlvUGxheWVySW5zdGFuY2UuYWN0aXZhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0lzc3VlIHdpdGggbGF1bmNoaW5nIGF1ZGlvIHBsYXllciB3aXRoIEFuZ3VsYXInKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuYXVkaW9QbGF5ZXJJbnN0YW5jZSAmJiB0eXBlb2YgdGhpcy5hdWRpb1BsYXllckluc3RhbmNlLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuYXVkaW9QbGF5ZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iXX0=