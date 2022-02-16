import { __decorate, __read, __values } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoAudioRecorderConfig } from './ziggeo-audio-recorder.config';
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
export { ZiggeoAudioRecorderDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXJlY29yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsiemlnZ2VvLWF1ZGlvLXJlY29yZGVyL3ppZ2dlby1hdWRpby1yZWNvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBZTNFO0lBU0Usc0NBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQWlDO1FBRGxFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFScEUsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0RBQVMsR0FBVDs7UUFBQSxpQkF5QkM7UUF4QkMsSUFBTSxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRWhDLElBQUksT0FBTyxFQUFFOztvQkFDWCxLQUEyQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBN0MsSUFBQSx3QkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxLQUFLLEVBQUU7NEJBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0Qzs2QkFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7NEJBQ2xELHFCQUFxQjs0QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUMxQztxQkFDRjs7Ozs7Ozs7O2dCQUVELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtvQkFDaEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxzREFBZSxHQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsNkRBQTZEO2dCQUM3RCxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDMUQsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRO29CQUN0QixLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU87aUJBQ3BCLEVBQUUsS0FBSSxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxPQUFPLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO29CQUM3RCxLQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztpQkFDbEU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQzFGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQXZEa0IsVUFBVTtnQkFBb0IsU0FBUztnQkFDeEMsTUFBTTtnQkFBMkIseUJBQXlCOztJQU5uRTtRQUFSLEtBQUssRUFBRTtnRUFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7aUVBQXFCO0lBQ25CO1FBQVQsTUFBTSxFQUFFOytFQUFtQztJQVBqQyw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsb0ZBQW9GO1NBQy9GLENBQUM7T0FDVyw0QkFBNEIsQ0FrRXhDO0lBQUQsbUNBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWxFWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsXG4gIFJlbmRlcmVyMiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBaaWdnZW9BdWRpb1JlY29yZGVyQ29uZmlnIH0gZnJvbSAnLi96aWdnZW8tYXVkaW8tcmVjb3JkZXIuY29uZmlnJztcblxuLy8gWmlnZ2VvQXBpXG5kZWNsYXJlIGNvbnN0IFppZ2dlb0FwaTogYW55O1xuZGVjbGFyZSBuYW1lc3BhY2UgWmlnZ2VvQXBpLlYyIHtcbiAgaW50ZXJmYWNlIFYyIHtcbiAgICBBcHBsaWNhdGlvbjogYW55O1xuICAgIEF1ZGlvUmVjb3JkZXI6IGFueTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgZXhwb3J0QXM6ICd6aWdnZW9hdWRpb3JlY29yZGVyJyxcbiAgc2VsZWN0b3I6ICd6aWdnZW9hdWRpb3JlY29yZGVyLCB6aWdnZW8tYXVkaW8tcmVjb3JkZXJbYXBpS2V5XSwgemlnZ2VvLWF1ZGlvLXJlY29yZGVyW29wdGlvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9BdWRpb1JlY29yZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcblxuICBwdWJsaWMgX2VsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb246IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2FwcE9wdGlvbnM6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwdWJsaWMgYXBpS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYXVkaW9SZWNvcmRlckluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IFppZ2dlb0F1ZGlvUmVjb3JkZXJDb25maWdcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGFwaUtleSA9IGAke3RoaXMuYXBpS2V5fWA7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmIChhcGlLZXkgJiYgIXRoaXMuX2FwcGxpY2F0aW9uKSB7XG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9uc1trZXldID09PSB0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwcE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzXG4gICAgICAgICAgICB0aGlzLl9hcHBPcHRpb25zW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmwxMG4pIHtcbiAgICAgICAgICBaaWdnZW9BcGkuVjIuTG9jYWxlLnNldExvY2FsZShvcHRpb25zLmwxMG4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBaaWdnZW9BcGkuVjIuQXBwbGljYXRpb24uaW5zdGFuY2VCeVRva2VuKGFwaUtleSwgdGhpcy5fYXBwT3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIC8vIFByZXZlbnQgZHVyaW5nIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gcnVuIG5nRG9DaGVjayBtZXRob2RcbiAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVySW5zdGFuY2UgPSBuZXcgWmlnZ2VvQXBpLlYyLkF1ZGlvUmVjb3JkZXIoe1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQsXG4gICAgICAgICAgYXR0cnM6IHRoaXMub3B0aW9uc1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1ZGlvUmVjb3JkZXJJbnN0YW5jZS5hY3RpdmF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlckluc3RhbmNlLmFjdGl2YXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJc3N1ZSB3aXRoIGxhdW5jaGluZyBhdWRpbyByZWNvcmRlciB3aXRoIEFuZ3VsYXInKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlckluc3RhbmNlICYmIHR5cGVvZiB0aGlzLmF1ZGlvUmVjb3JkZXJJbnN0YW5jZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmF1ZGlvUmVjb3JkZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iXX0=