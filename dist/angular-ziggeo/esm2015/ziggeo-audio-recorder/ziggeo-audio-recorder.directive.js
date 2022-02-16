import { __decorate } from "tslib";
import { Directive, DoCheck, ElementRef, Input, NgZone, Renderer2, AfterViewInit, OnDestroy, Output } from '@angular/core';
import { ZiggeoAudioRecorderConfig } from './ziggeo-audio-recorder.config';
let ZiggeoAudioRecorderDirective = class ZiggeoAudioRecorderDirective {
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
                this.audioRecorderInstance = new ZiggeoApi.V2.AudioRecorder({
                    element: this._element,
                    attrs: this.options
                }, this);
                if (typeof this.audioRecorderInstance.activate === 'function') {
                    this.audioRecorderInstance.activate();
                }
                else {
                    console.warn('Issue with launching audio recorder with Angular');
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.audioRecorderInstance && typeof this.audioRecorderInstance.destroy === 'function') {
            this.audioRecorderInstance.destroy();
        }
    }
};
ZiggeoAudioRecorderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ZiggeoAudioRecorderConfig }
];
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
export { ZiggeoAudioRecorderDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXJlY29yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsiemlnZ2VvLWF1ZGlvLXJlY29yZGVyL3ppZ2dlby1hdWRpby1yZWNvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUM3QyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBZTNFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBU3ZDLFlBQ1UsT0FBbUIsRUFBVSxRQUFtQixFQUNoRCxNQUFjLEVBQW1CLE1BQWlDO1FBRGxFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFScEUsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFTNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRWhDLElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sS0FBSyxFQUFFO3dCQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdEM7eUJBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO3dCQUNsRCxxQkFBcUI7d0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDMUM7aUJBQ0Y7Z0JBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNoQixTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QzthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUNqQyw2REFBNkQ7Z0JBQzdELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUMxRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDcEIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDVCxJQUFJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7b0JBQzdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2lCQUNsRTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHFCQUFxQixJQUFJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDMUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBeERvQixVQUFVO1lBQW9CLFNBQVM7WUFDeEMsTUFBTTtZQUEyQix5QkFBeUI7O0FBTm5FO0lBQVIsS0FBSyxFQUFFOzREQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTs2REFBcUI7QUFDbkI7SUFBVCxNQUFNLEVBQUU7MkVBQW1DO0FBUGpDLDRCQUE0QjtJQUp4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSxvRkFBb0Y7S0FDL0YsQ0FBQztHQUNXLDRCQUE0QixDQWtFeEM7U0FsRVksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLFxuICBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWmlnZ2VvQXVkaW9SZWNvcmRlckNvbmZpZyB9IGZyb20gJy4vemlnZ2VvLWF1ZGlvLXJlY29yZGVyLmNvbmZpZyc7XG5cbi8vIFppZ2dlb0FwaVxuZGVjbGFyZSBjb25zdCBaaWdnZW9BcGk6IGFueTtcbmRlY2xhcmUgbmFtZXNwYWNlIFppZ2dlb0FwaS5WMiB7XG4gIGludGVyZmFjZSBWMiB7XG4gICAgQXBwbGljYXRpb246IGFueTtcbiAgICBBdWRpb1JlY29yZGVyOiBhbnk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIGV4cG9ydEFzOiAnemlnZ2VvYXVkaW9yZWNvcmRlcicsXG4gIHNlbGVjdG9yOiAnemlnZ2VvYXVkaW9yZWNvcmRlciwgemlnZ2VvLWF1ZGlvLXJlY29yZGVyW2FwaUtleV0sIHppZ2dlby1hdWRpby1yZWNvcmRlcltvcHRpb25zXSdcbn0pXG5leHBvcnQgY2xhc3MgWmlnZ2VvQXVkaW9SZWNvcmRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9hcHBPcHRpb25zOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHVibGljIGFwaUtleTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55O1xuICBAT3V0cHV0KCkgcHVibGljIGF1ZGlvUmVjb3JkZXJJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBaaWdnZW9BdWRpb1JlY29yZGVyQ29uZmlnXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBjb25zdCBhcGlLZXkgPSBgJHt0aGlzLmFwaUtleX1gO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoYXBpS2V5ICYmICF0aGlzLl9hcHBsaWNhdGlvbikge1xuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZykpIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1trZXldICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnNba2V5XSA9PT0gdHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWdba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICAgICAgdGhpcy5fYXBwT3B0aW9uc1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5sMTBuKSB7XG4gICAgICAgICAgWmlnZ2VvQXBpLlYyLkxvY2FsZS5zZXRMb2NhbGUob3B0aW9ucy5sMTBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gWmlnZ2VvQXBpLlYyLkFwcGxpY2F0aW9uLmluc3RhbmNlQnlUb2tlbihhcGlLZXksIHRoaXMuX2FwcE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvbikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBQcmV2ZW50IGR1cmluZyBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBuZ0RvQ2hlY2sgbWV0aG9kXG4gICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlckluc3RhbmNlID0gbmV3IFppZ2dlb0FwaS5WMi5BdWRpb1JlY29yZGVyKHtcbiAgICAgICAgICBlbGVtZW50OiB0aGlzLl9lbGVtZW50LFxuICAgICAgICAgIGF0dHJzOiB0aGlzLm9wdGlvbnNcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdWRpb1JlY29yZGVySW5zdGFuY2UuYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXJJbnN0YW5jZS5hY3RpdmF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSXNzdWUgd2l0aCBsYXVuY2hpbmcgYXVkaW8gcmVjb3JkZXIgd2l0aCBBbmd1bGFyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXJJbnN0YW5jZSAmJiB0eXBlb2YgdGhpcy5hdWRpb1JlY29yZGVySW5zdGFuY2UuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5hdWRpb1JlY29yZGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19