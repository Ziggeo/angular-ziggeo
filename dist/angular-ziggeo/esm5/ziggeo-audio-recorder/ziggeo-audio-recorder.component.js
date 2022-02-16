import { __decorate } from "tslib";
import { Injectable, Component } from '@angular/core';
import { ZiggeoAudioRecorderDirective } from './ziggeo-audio-recorder.directive';
import * as i0 from "@angular/core";
import * as i1 from "./ziggeo-audio-recorder.directive";
/**
 * ZiggeoRecorder
 */
var ZiggeoAudioRecorderComponent = /** @class */ (function () {
    function ZiggeoAudioRecorderComponent(audioRecorder) {
        this.audioRecorder = audioRecorder;
    }
    ZiggeoAudioRecorderComponent.ctorParameters = function () { return [
        { type: ZiggeoAudioRecorderDirective }
    ]; };
    ZiggeoAudioRecorderComponent.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZiggeoAudioRecorderComponent_Factory() { return new ZiggeoAudioRecorderComponent(i0.ɵɵinject(i1.ZiggeoAudioRecorderDirective)); }, token: ZiggeoAudioRecorderComponent, providedIn: "root" });
    ZiggeoAudioRecorderComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-audio-recorder',
            template: "<div #ziggeoaudiorecorder ></div>"
        })
    ], ZiggeoAudioRecorderComponent);
    return ZiggeoAudioRecorderComponent;
}());
export { ZiggeoAudioRecorderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXJlY29yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsiemlnZ2VvLWF1ZGlvLXJlY29yZGVyL3ppZ2dlby1hdWRpby1yZWNvcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsU0FBUyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRS9FOztHQUVHO0FBTUg7SUFDRSxzQ0FBb0IsYUFBMkM7UUFBM0Msa0JBQWEsR0FBYixhQUFhLENBQThCO0lBQUcsQ0FBQzs7Z0JBQWhDLDRCQUE0Qjs7O0lBRHBELDRCQUE0QjtRQUx4QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsbUNBQW1DO1NBQzlDLENBQUM7T0FDVyw0QkFBNEIsQ0FFeEM7dUNBZkQ7Q0FlQyxBQUZELElBRUM7U0FGWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLCBDb21wb25lbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ppZ2dlb0F1ZGlvUmVjb3JkZXJEaXJlY3RpdmV9IGZyb20gJy4vemlnZ2VvLWF1ZGlvLXJlY29yZGVyLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogWmlnZ2VvUmVjb3JkZXJcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ppZ2dlby1hdWRpby1yZWNvcmRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAjemlnZ2VvYXVkaW9yZWNvcmRlciA+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9BdWRpb1JlY29yZGVyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdWRpb1JlY29yZGVyOiBaaWdnZW9BdWRpb1JlY29yZGVyRGlyZWN0aXZlKSB7fVxufVxuIl19