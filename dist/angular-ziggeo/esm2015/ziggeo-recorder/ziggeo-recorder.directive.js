import { __decorate } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoRecorderConfig } from './ziggeo-recorder.config';
let ZiggeoRecorderDirective = class ZiggeoRecorderDirective {
    constructor(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this.config = config;
        this._element = this.element.nativeElement;
    }
    ngDoCheck() {
        const apiKey = `${this.apiKey}`;
        const options = this.options;
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
                for (const [key, value] of Object.entries(this.config)) {
                    if (options[key] !== undefined && typeof options[key] === typeof value) {
                        this._appOptions[key] = options[key];
                    }
                    else if (typeof this.config[key] !== 'undefined') {
                        // Set default values
                        this._appOptions[key] = this.config[key];
                    }
                }
                if (options.l10n) {
                    ZiggeoApi.V2.Locale.setLocale(options.l10n);
                }
            }
            this.ngZone.runOutsideAngular(() => {
                this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, this._appOptions);
            });
        }
    }
    ngAfterViewInit() {
        if (this._application) {
            this.ngZone.runOutsideAngular(() => {
                // Prevent during every change detection run ngDoCheck method
                this.recorderInstance = new ZiggeoApi.V2.Recorder({
                    element: this._element,
                    attrs: this.options
                }, this);
                if (typeof this.recorderInstance.activate === 'function') {
                    this.recorderInstance.activate();
                }
                else {
                    console.warn('Issue with launching recorder with Angular');
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
            this.recorderInstance.destroy();
        }
    }
};
ZiggeoRecorderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoRecorderConfig }
];
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
export { ZiggeoRecorderDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLXJlY29yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsiemlnZ2VvLXJlY29yZGVyL3ppZ2dlby1yZWNvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBZWhFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBU2xDLFlBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQTRCO1FBRDdELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFSL0QsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRWhDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtvQkFDdkIsT0FBTyxDQUFD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LEVBQUUsbUVBQW1FO0tBQzlFLENBQUM7R0FDVyx1QkFBdUIsQ0E4RW5DO1NBOUVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSxcbiAgUmVuZGVyZXIyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFppZ2dlb1JlY29yZGVyQ29uZmlnIH0gZnJvbSAnLi96aWdnZW8tcmVjb3JkZXIuY29uZmlnJztcblxuLy8gWmlnZ2VvQXBpXG5kZWNsYXJlIGNvbnN0IFppZ2dlb0FwaTogYW55O1xuZGVjbGFyZSBuYW1lc3BhY2UgWmlnZ2VvQXBpLlYyIHtcbiAgaW50ZXJmYWNlIFYyIHtcbiAgICBBcHBsaWNhdGlvbjogYW55O1xuICAgIFJlY29yZGVyOiBhbnk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIGV4cG9ydEFzOiAnemlnZ2VvcmVjb3JkZXInLFxuICBzZWxlY3RvcjogJ3ppZ2dlb3JlY29yZGVyLCB6aWdnZW8tcmVjb3JkZXJbYXBpS2V5XSwgemlnZ2VvLXJlY29yZGVyW29wdGlvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9SZWNvcmRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9hcHBPcHRpb25zOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHVibGljIGFwaUtleTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55O1xuICBAT3V0cHV0KCkgcHVibGljIHJlY29yZGVySW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogWmlnZ2VvUmVjb3JkZXJDb25maWdcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGFwaUtleSA9IGAke3RoaXMuYXBpS2V5fWA7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmIChhcGlLZXkgJiYgIXRoaXMuX2FwcGxpY2F0aW9uKSB7XG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmFsbG93c2NyZWVuKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGVkIHdpbGwgYmUgcmVtb3ZlZC4gUmVhc29uOiBDaHJvbWUgc3VwcG9ydHMgc2NyZWVuIHJlY29yZGVyIHcvbyBwbHVnaW5zLicpO1xuICAgICAgICAgIHRoaXMuX2FwcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjaHJvbWVfZXh0ZW5zaW9uX2lkOiBvcHRpb25zLmNocm9tZV9leHRlbnNpb25faWQgfHwgJ21lb2VmamtjaWxnamxraWJuampsZmRncGhhY2JlZ2xrJyxcbiAgICAgICAgICAgIGNocm9tZV9leHRlbnNpb25faW5zdGFsbF9saW5rOiBvcHRpb25zXG4gICAgICAgICAgICAgIC5jaHJvbWVfZXh0ZW5zaW9uX2luc3RhbGxfbGluayB8fCAnaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbWVvZWZqa2NpbGdqbGtpYm5qamxmZGdwaGFjYmVnbGsnLFxuICAgICAgICAgICAgb3BlcmFfZXh0ZW5zaW9uX2lkOiBvcHRpb25zLm9wZXJhX2V4dGVuc2lvbl9pZCB8fCAnZG5ub2xtbmVuZWhoZ3BsZWJqaGJjbWZkYmFhYmtlcG0nLFxuICAgICAgICAgICAgb3BlcmFfZXh0ZW5zaW9uX2luc3RhbGxfbGluazogb3B0aW9uc1xuICAgICAgICAgICAgICAub3BlcmFfZXh0ZW5zaW9uX2luc3RhbGxfbGluayB8fCAnaHR0cHM6Ly9hZGRvbnMub3BlcmEuY29tL2VuL2V4dGVuc2lvbnMvZGV0YWlscy8zZDQ2ZDRjMzZmZWZlOTdlNzY2MjJjNTRiMmViNmVhMWQ1NDA2NzY3J1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZykpIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1trZXldICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnNba2V5XSA9PT0gdHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWdba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICAgICAgdGhpcy5fYXBwT3B0aW9uc1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5sMTBuKSB7XG4gICAgICAgICAgWmlnZ2VvQXBpLlYyLkxvY2FsZS5zZXRMb2NhbGUob3B0aW9ucy5sMTBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gWmlnZ2VvQXBpLlYyLkFwcGxpY2F0aW9uLmluc3RhbmNlQnlUb2tlbihhcGlLZXksIHRoaXMuX2FwcE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvbikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBQcmV2ZW50IGR1cmluZyBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBuZ0RvQ2hlY2sgbWV0aG9kXG4gICAgICAgIHRoaXMucmVjb3JkZXJJbnN0YW5jZSA9IG5ldyBaaWdnZW9BcGkuVjIuUmVjb3JkZXIoe1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQsXG4gICAgICAgICAgYXR0cnM6IHRoaXMub3B0aW9uc1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlY29yZGVySW5zdGFuY2UuYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnJlY29yZGVySW5zdGFuY2UuYWN0aXZhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0lzc3VlIHdpdGggbGF1bmNoaW5nIHJlY29yZGVyIHdpdGggQW5ndWxhcicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yZWNvcmRlckluc3RhbmNlICYmIHR5cGVvZiB0aGlzLnJlY29yZGVySW5zdGFuY2UuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5yZWNvcmRlckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==