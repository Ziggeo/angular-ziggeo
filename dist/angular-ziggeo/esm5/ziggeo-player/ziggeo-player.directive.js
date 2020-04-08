import { __decorate, __read, __values } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoPlayerConfig } from './ziggeo-player.config';
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
export { ZiggeoPlayerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLXBsYXllci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1wbGF5ZXIvemlnZ2VvLXBsYXllci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBYzFEO0lBVUUsK0JBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQTBCO1FBRDNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFUN0QsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFTN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQseUNBQVMsR0FBVDs7UUFBQSxpQkFxQkM7UUFwQkMsSUFBTSxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2hDLElBQUksT0FBTyxFQUFFOztvQkFDWCxLQUEyQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBN0MsSUFBQSx3QkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxLQUFLLEVBQUU7NEJBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0QztxQkFDRjs7Ozs7Ozs7O2dCQUVELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtvQkFDaEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsNkRBQTZEO2dCQUM3RCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxLQUFJLENBQUMsUUFBUTtvQkFDdEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPO2lCQUNwQixFQUFFLEtBQUksQ0FBQyxDQUFDO2dCQUNULElBQUksT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7b0JBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2hDO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztpQkFDMUQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQWxEa0IsVUFBVTtnQkFBb0IsU0FBUztnQkFDeEMsTUFBTTtnQkFBMkIsa0JBQWtCOztJQU41RDtRQUFSLEtBQUssRUFBRTt5REFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7MERBQXFCO0lBQ25CO1FBQVQsTUFBTSxFQUFFO2lFQUE0QjtJQVIxQixxQkFBcUI7UUFIakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZEQUE2RDtTQUN4RSxDQUFDO09BQ1cscUJBQXFCLENBOERqQztJQUFELDRCQUFDO0NBQUEsQUE5REQsSUE4REM7U0E5RFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLFxuICBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtaaWdnZW9QbGF5ZXJDb25maWd9IGZyb20gJy4vemlnZ2VvLXBsYXllci5jb25maWcnO1xuXG4vLyBaaWdnZW9BcGlcbmRlY2xhcmUgY29uc3QgWmlnZ2VvQXBpOiBhbnk7XG5kZWNsYXJlIG5hbWVzcGFjZSBaaWdnZW9BcGkuVjIge1xuICBpbnRlcmZhY2UgVjIge1xuICAgIEFwcGxpY2F0aW9uOiBhbnk7XG4gICAgUGxheWVyOiBhbnk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnemlnZ2VvcGxheWVyLCB6aWdnZW8tcGxheWVyW2FwaUtleV0sIHppZ2dlby1wbGF5ZXJbb3B0aW9uc10nXG59KVxuZXhwb3J0IGNsYXNzIFppZ2dlb1BsYXllckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9hcHBPcHRpb25zOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfYXBwX29wdGlvbnM6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwdWJsaWMgYXBpS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcGxheWVySW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogWmlnZ2VvUGxheWVyQ29uZmlnXG4gICkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBjb25zdCBhcGlLZXkgPSBgJHt0aGlzLmFwaUtleX1gO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoYXBpS2V5ICYmICF0aGlzLl9hcHBsaWNhdGlvbikge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5jb25maWcpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNba2V5XSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zW2tleV0gPT09IHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYXBwT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmwxMG4pIHtcbiAgICAgICAgICBaaWdnZW9BcGkuVjIuTG9jYWxlLnNldExvY2FsZShvcHRpb25zLmwxMG4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBaaWdnZW9BcGkuVjIuQXBwbGljYXRpb24uaW5zdGFuY2VCeVRva2VuKGFwaUtleSwgdGhpcy5fYXBwX29wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvbikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBQcmV2ZW50IGR1cmluZyBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBuZ0RvQ2hlY2sgbWV0aG9kXG4gICAgICAgIHRoaXMucGxheWVySW5zdGFuY2UgPSBuZXcgWmlnZ2VvQXBpLlYyLlBsYXllcih7XG4gICAgICAgICAgZWxlbWVudDogdGhpcy5fZWxlbWVudCxcbiAgICAgICAgICBhdHRyczogdGhpcy5vcHRpb25zXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucGxheWVySW5zdGFuY2UuYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnBsYXllckluc3RhbmNlLmFjdGl2YXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJc3N1ZSB3aXRoIGxhdW5jaGluZyBwbGF5ZXIgd2l0aCBBbmd1bGFyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnBsYXllckluc3RhbmNlICYmIHR5cGVvZiB0aGlzLnBsYXllckluc3RhbmNlLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMucGxheWVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19