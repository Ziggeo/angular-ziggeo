import { __decorate } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoAudioPlayerConfig } from './ziggeo-audio-player.config';
let ZiggeoAudioPlayerDirective = class ZiggeoAudioPlayerDirective {
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
                this.audioPlayerInstance = new ZiggeoApi.V2.AudioPlayer({
                    element: this._element,
                    attrs: this.options
                }, this);
                if (typeof this.audioPlayerInstance.activate === 'function') {
                    this.audioPlayerInstance.activate();
                }
                else {
                    console.warn('Issue with launching audio player with Angular');
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.audioPlayerInstance && typeof this.audioPlayerInstance.destroy === 'function') {
            this.audioPlayerInstance.destroy();
        }
    }
};
ZiggeoAudioPlayerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoAudioPlayerConfig }
];
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
export { ZiggeoAudioPlayerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXBsYXllci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1hdWRpby1wbGF5ZXIvemlnZ2VvLWF1ZGlvLXBsYXllci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBY3JFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBVXJDLFlBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQStCO1FBRGhFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFUbEUsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFTN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2hDLElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sS0FBSyxFQUFFO3dCQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Y7Z0JBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNoQixTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QzthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUNqQyw2REFBNkQ7Z0JBQzdELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUN0RCxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDcEIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDVCxJQUFJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7b0JBQzNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2lCQUNoRTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDdEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkRvQixVQUFVO1lBQW9CLFNBQVM7WUFDeEMsTUFBTTtZQUEyQix1QkFBdUI7O0FBTmpFO0lBQVIsS0FBSyxFQUFFOzBEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTsyREFBcUI7QUFDbkI7SUFBVCxNQUFNLEVBQUU7dUVBQWlDO0FBUi9CLDBCQUEwQjtJQUh0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOEVBQThFO0tBQ3pGLENBQUM7R0FDVywwQkFBMEIsQ0E4RHRDO1NBOURZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSxcbiAgUmVuZGVyZXIyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7WmlnZ2VvQXVkaW9QbGF5ZXJDb25maWd9IGZyb20gJy4vemlnZ2VvLWF1ZGlvLXBsYXllci5jb25maWcnO1xuXG4vLyBaaWdnZW9BcGlcbmRlY2xhcmUgY29uc3QgWmlnZ2VvQXBpOiBhbnk7XG5kZWNsYXJlIG5hbWVzcGFjZSBaaWdnZW9BcGkuVjIge1xuICBpbnRlcmZhY2UgVjIge1xuICAgIEFwcGxpY2F0aW9uOiBhbnk7XG4gICAgQXVkaW9QbGF5ZXI6IGFueTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd6aWdnZW9hdWRpb3BsYXllciwgemlnZ2VvLWF1ZGlvLXBsYXllclthcGlLZXldLCB6aWdnZW8tYXVkaW8tcGxheWVyW29wdGlvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9BdWRpb1BsYXllckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9hcHBPcHRpb25zOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfYXBwX29wdGlvbnM6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwdWJsaWMgYXBpS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYXVkaW9QbGF5ZXJJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBaaWdnZW9BdWRpb1BsYXllckNvbmZpZ1xuICApIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgY29uc3QgYXBpS2V5ID0gYCR7dGhpcy5hcGlLZXl9YDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKGFwaUtleSAmJiAhdGhpcy5fYXBwbGljYXRpb24pIHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9uc1trZXldID09PSB0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwcE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5sMTBuKSB7XG4gICAgICAgICAgWmlnZ2VvQXBpLlYyLkxvY2FsZS5zZXRMb2NhbGUob3B0aW9ucy5sMTBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gWmlnZ2VvQXBpLlYyLkFwcGxpY2F0aW9uLmluc3RhbmNlQnlUb2tlbihhcGlLZXksIHRoaXMuX2FwcF9vcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYXBwbGljYXRpb24pIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCBkdXJpbmcgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBydW4gbmdEb0NoZWNrIG1ldGhvZFxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVySW5zdGFuY2UgPSBuZXcgWmlnZ2VvQXBpLlYyLkF1ZGlvUGxheWVyKHtcbiAgICAgICAgICBlbGVtZW50OiB0aGlzLl9lbGVtZW50LFxuICAgICAgICAgIGF0dHJzOiB0aGlzLm9wdGlvbnNcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdWRpb1BsYXllckluc3RhbmNlLmFjdGl2YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5hdWRpb1BsYXllckluc3RhbmNlLmFjdGl2YXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJc3N1ZSB3aXRoIGxhdW5jaGluZyBhdWRpbyBwbGF5ZXIgd2l0aCBBbmd1bGFyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmF1ZGlvUGxheWVySW5zdGFuY2UgJiYgdHlwZW9mIHRoaXMuYXVkaW9QbGF5ZXJJbnN0YW5jZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmF1ZGlvUGxheWVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19