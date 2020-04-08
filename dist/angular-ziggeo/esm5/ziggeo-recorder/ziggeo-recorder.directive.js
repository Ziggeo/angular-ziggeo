import { __decorate, __read, __values } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoRecorderConfig } from './ziggeo-recorder.config';
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
export { ZiggeoRecorderDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLXJlY29yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsiemlnZ2VvLXJlY29yZGVyL3ppZ2dlby1yZWNvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBZWhFO0lBU0UsaUNBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQTRCO1FBRDdELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFSL0QsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsMkNBQVMsR0FBVDs7UUFBQSxpQkFxQ0M7UUFwQ0MsSUFBTSxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRWhDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtvQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxrRkFB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RUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLG1FQUFtRTtTQUM5RSxDQUFDO09BQ1csdUJBQXVCLENBOEVuQztJQUFELDhCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0E5RVksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLFxuICBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWmlnZ2VvUmVjb3JkZXJDb25maWcgfSBmcm9tICcuL3ppZ2dlby1yZWNvcmRlci5jb25maWcnO1xuXG4vLyBaaWdnZW9BcGlcbmRlY2xhcmUgY29uc3QgWmlnZ2VvQXBpOiBhbnk7XG5kZWNsYXJlIG5hbWVzcGFjZSBaaWdnZW9BcGkuVjIge1xuICBpbnRlcmZhY2UgVjIge1xuICAgIEFwcGxpY2F0aW9uOiBhbnk7XG4gICAgUmVjb3JkZXI6IGFueTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgZXhwb3J0QXM6ICd6aWdnZW9yZWNvcmRlcicsXG4gIHNlbGVjdG9yOiAnemlnZ2VvcmVjb3JkZXIsIHppZ2dlby1yZWNvcmRlclthcGlLZXldLCB6aWdnZW8tcmVjb3JkZXJbb3B0aW9uc10nXG59KVxuZXhwb3J0IGNsYXNzIFppZ2dlb1JlY29yZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcblxuICBwdWJsaWMgX2VsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb246IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2FwcE9wdGlvbnM6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwdWJsaWMgYXBpS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVjb3JkZXJJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBaaWdnZW9SZWNvcmRlckNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgY29uc3QgYXBpS2V5ID0gYCR7dGhpcy5hcGlLZXl9YDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKGFwaUtleSAmJiAhdGhpcy5fYXBwbGljYXRpb24pIHtcblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dzY3JlZW4pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0RlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkLiBSZWFzb246IENocm9tZSBzdXBwb3J0cyBzY3JlZW4gcmVjb3JkZXIgdy9vIHBsdWdpbnMuJyk7XG4gICAgICAgICAgdGhpcy5fYXBwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNocm9tZV9leHRlbnNpb25faWQ6IG9wdGlvbnMuY2hyb21lX2V4dGVuc2lvbl9pZCB8fCAnbWVvZWZqa2NpbGdqbGtpYm5qamxmZGdwaGFjYmVnbGsnLFxuICAgICAgICAgICAgY2hyb21lX2V4dGVuc2lvbl9pbnN0YWxsX2xpbms6IG9wdGlvbnNcbiAgICAgICAgICAgICAgLmNocm9tZV9leHRlbnNpb25faW5zdGFsbF9saW5rIHx8ICdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9tZW9lZmprY2lsZ2psa2libmpqbGZkZ3BoYWNiZWdsaycsXG4gICAgICAgICAgICBvcGVyYV9leHRlbnNpb25faWQ6IG9wdGlvbnMub3BlcmFfZXh0ZW5zaW9uX2lkIHx8ICdkbm5vbG1uZW5laGhncGxlYmpoYmNtZmRiYWFia2VwbScsXG4gICAgICAgICAgICBvcGVyYV9leHRlbnNpb25faW5zdGFsbF9saW5rOiBvcHRpb25zXG4gICAgICAgICAgICAgIC5vcGVyYV9leHRlbnNpb25faW5zdGFsbF9saW5rIHx8ICdodHRwczovL2FkZG9ucy5vcGVyYS5jb20vZW4vZXh0ZW5zaW9ucy9kZXRhaWxzLzNkNDZkNGMzNmZlZmU5N2U3NjYyMmM1NGIyZWI2ZWExZDU0MDY3NjcnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9uc1trZXldID09PSB0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwcE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzXG4gICAgICAgICAgICB0aGlzLl9hcHBPcHRpb25zW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmwxMG4pIHtcbiAgICAgICAgICBaaWdnZW9BcGkuVjIuTG9jYWxlLnNldExvY2FsZShvcHRpb25zLmwxMG4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBaaWdnZW9BcGkuVjIuQXBwbGljYXRpb24uaW5zdGFuY2VCeVRva2VuKGFwaUtleSwgdGhpcy5fYXBwT3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIC8vIFByZXZlbnQgZHVyaW5nIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gcnVuIG5nRG9DaGVjayBtZXRob2RcbiAgICAgICAgdGhpcy5yZWNvcmRlckluc3RhbmNlID0gbmV3IFppZ2dlb0FwaS5WMi5SZWNvcmRlcih7XG4gICAgICAgICAgZWxlbWVudDogdGhpcy5fZWxlbWVudCxcbiAgICAgICAgICBhdHRyczogdGhpcy5vcHRpb25zXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVjb3JkZXJJbnN0YW5jZS5hY3RpdmF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucmVjb3JkZXJJbnN0YW5jZS5hY3RpdmF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSXNzdWUgd2l0aCBsYXVuY2hpbmcgcmVjb3JkZXIgd2l0aCBBbmd1bGFyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnJlY29yZGVySW5zdGFuY2UgJiYgdHlwZW9mIHRoaXMucmVjb3JkZXJJbnN0YW5jZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnJlY29yZGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19