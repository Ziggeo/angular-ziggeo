import { Component, ViewChild, Input } from '@angular/core';
import { ZiggeoRecorderService } from './ziggeo-recorder.service';
var ZiggeoRecorderComponent = /** @class */ (function () {
    function ZiggeoRecorderComponent(_ziggeoRecorderService) {
        this._ziggeoRecorderService = _ziggeoRecorderService;
        this.options = {};
        this._application = null;
        this._events = {};
        this._app_options = {};
        this._events = _ziggeoRecorderService.getEvents();
    }
    ZiggeoRecorderComponent.prototype.ngDoCheck = function () {
        if (this.apiKey && !this._application) {
            if (this.options.allowscreen) {
                this._app_options = {
                    'chrome_extension_id': this.options.chrome_extension_id || 'meoefjkcilgjlkibnjjlfdgphacbeglk',
                    'chrome_extension_install_link': this.options.chrome_extension_id || 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk',
                    'opera_extension_id': this.options.opera_extension_id || 'dnnolmnenehhgplebjhbcmfdbaabkepm',
                    'opera_extension_install_link': this.options.opera_extension_install_link || 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
                };
            }
            this._application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey, this._app_options);
        }
    };
    ZiggeoRecorderComponent.prototype.ngAfterViewInit = function () {
        if (this._application) {
            this.recorderInstance = new ZiggeoApi.V2.Recorder({
                element: this.ziggeorecorder.nativeElement,
                attrs: this.options
            }, this);
            if (typeof this.recorderInstance.activate === 'function') {
                this.recorderInstance.activate();
            }
            else {
                console.warn('Issue with launching recorder with Angular');
            }
        }
    };
    ZiggeoRecorderComponent.prototype.ngOnDestroy = function () {
        if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
            this.recorderInstance.destroy();
        }
    };
    ZiggeoRecorderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ziggeo-recorder',
                    providers: [ZiggeoRecorderService],
                    template: "<div #ziggeorecorder [apiKey]=\"apiKey\" [options]=\"options\"></div>"
                },] },
    ];
    /** @nocollapse */
    ZiggeoRecorderComponent.ctorParameters = function () { return [
        { type: ZiggeoRecorderService, },
    ]; };
    ZiggeoRecorderComponent.propDecorators = {
        'ziggeorecorder': [{ type: ViewChild, args: ['ziggeorecorder',] },],
        'apiKey': [{ type: Input },],
        'options': [{ type: Input },],
    };
    return ZiggeoRecorderComponent;
}());
export { ZiggeoRecorderComponent };
//# sourceMappingURL=ziggeo-recorder.component.js.map