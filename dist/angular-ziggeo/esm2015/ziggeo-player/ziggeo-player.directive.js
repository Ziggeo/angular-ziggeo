import { __decorate } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoPlayerConfig } from './ziggeo-player.config';
let ZiggeoPlayerDirective = class ZiggeoPlayerDirective {
    constructor(element, renderer, ngZone, config) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.config = config;
        this._application = null;
        this._appOptions = {};
        this._app_options = {};
        this._element = this.element.nativeElement;
    }
    ngDoCheck() {
        const apiKey = `${this.apiKey}`;
        const options = this.options;
        if (apiKey && !this._application) {
            if (options) {
                for (const [key, value] of Object.entries(this.config)) {
                    if (options[key] !== undefined && typeof options[key] === typeof value) {
                        this._appOptions[key] = options[key];
                    }
                }
                if (options.l10n) {
                    ZiggeoApi.V2.Locale.setLocale(options.l10n);
                }
            }
            this.ngZone.runOutsideAngular(() => {
                this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, this._app_options);
            });
        }
    }
    ngAfterViewInit() {
        if (this._application) {
            this.ngZone.runOutsideAngular(() => {
                // Prevent during every change detection run ngDoCheck method
                this.playerInstance = new ZiggeoApi.V2.Player({
                    element: this._element,
                    attrs: this.options
                }, this);
                if (typeof this.playerInstance.activate === 'function') {
                    this.playerInstance.activate();
                }
                else {
                    console.warn('Issue with launching player with Angular');
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.playerInstance && typeof this.playerInstance.destroy === 'function') {
            this.playerInstance.destroy();
        }
    }
};
ZiggeoPlayerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoPlayerConfig }
];
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
export { ZiggeoPlayerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLXBsYXllci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1wbGF5ZXIvemlnZ2VvLXBsYXllci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBYzFELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBVWhDLFlBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQTBCO1FBRDNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFUN0QsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFTN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2hDLElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sS0FBSyxFQUFFO3dCQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Y7Z0JBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNoQixTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QzthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUNqQyw2REFBNkQ7Z0JBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDNUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtvQkFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDaEM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2lCQUMxRDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkRvQixVQUFVO1lBQW9CLFNBQVM7WUFDeEMsTUFBTTtZQUEyQixrQkFBa0I7O0FBTjVEO0lBQVIsS0FBSyxFQUFFO3FEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtzREFBcUI7QUFDbkI7SUFBVCxNQUFNLEVBQUU7NkRBQTRCO0FBUjFCLHFCQUFxQjtJQUhqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNkRBQTZEO0tBQ3hFLENBQUM7R0FDVyxxQkFBcUIsQ0E4RGpDO1NBOURZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSxcbiAgUmVuZGVyZXIyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7WmlnZ2VvUGxheWVyQ29uZmlnfSBmcm9tICcuL3ppZ2dlby1wbGF5ZXIuY29uZmlnJztcblxuLy8gWmlnZ2VvQXBpXG5kZWNsYXJlIGNvbnN0IFppZ2dlb0FwaTogYW55O1xuZGVjbGFyZSBuYW1lc3BhY2UgWmlnZ2VvQXBpLlYyIHtcbiAgaW50ZXJmYWNlIFYyIHtcbiAgICBBcHBsaWNhdGlvbjogYW55O1xuICAgIFBsYXllcjogYW55O1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3ppZ2dlb3BsYXllciwgemlnZ2VvLXBsYXllclthcGlLZXldLCB6aWdnZW8tcGxheWVyW29wdGlvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9QbGF5ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9hcHBsaWNhdGlvbjogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfYXBwT3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX2FwcF9vcHRpb25zOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHVibGljIGFwaUtleTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55O1xuICBAT3V0cHV0KCkgcHVibGljIHBsYXllckluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IFppZ2dlb1BsYXllckNvbmZpZ1xuICApIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgY29uc3QgYXBpS2V5ID0gYCR7dGhpcy5hcGlLZXl9YDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKGFwaUtleSAmJiAhdGhpcy5fYXBwbGljYXRpb24pIHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9uc1trZXldID09PSB0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwcE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5sMTBuKSB7XG4gICAgICAgICAgWmlnZ2VvQXBpLlYyLkxvY2FsZS5zZXRMb2NhbGUob3B0aW9ucy5sMTBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gWmlnZ2VvQXBpLlYyLkFwcGxpY2F0aW9uLmluc3RhbmNlQnlUb2tlbihhcGlLZXksIHRoaXMuX2FwcF9vcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYXBwbGljYXRpb24pIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCBkdXJpbmcgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBydW4gbmdEb0NoZWNrIG1ldGhvZFxuICAgICAgICB0aGlzLnBsYXllckluc3RhbmNlID0gbmV3IFppZ2dlb0FwaS5WMi5QbGF5ZXIoe1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQsXG4gICAgICAgICAgYXR0cnM6IHRoaXMub3B0aW9uc1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsYXllckluc3RhbmNlLmFjdGl2YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJJbnN0YW5jZS5hY3RpdmF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSXNzdWUgd2l0aCBsYXVuY2hpbmcgcGxheWVyIHdpdGggQW5ndWxhcicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXJJbnN0YW5jZSAmJiB0eXBlb2YgdGhpcy5wbGF5ZXJJbnN0YW5jZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnBsYXllckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==