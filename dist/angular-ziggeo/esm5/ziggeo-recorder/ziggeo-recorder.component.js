import { __decorate } from "tslib";
import { Injectable, Component } from '@angular/core';
import { ZiggeoRecorderDirective } from './ziggeo-recorder.directive';
import * as i0 from "@angular/core";
import * as i1 from "./ziggeo-recorder.directive";
/**
 * ZiggeoRecorder
 */
var ZiggeoRecorderComponent = /** @class */ (function () {
    function ZiggeoRecorderComponent(recorder) {
        this.recorder = recorder;
    }
    ZiggeoRecorderComponent.ctorParameters = function () { return [
        { type: ZiggeoRecorderDirective }
    ]; };
    ZiggeoRecorderComponent.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZiggeoRecorderComponent_Factory() { return new ZiggeoRecorderComponent(i0.ɵɵinject(i1.ZiggeoRecorderDirective)); }, token: ZiggeoRecorderComponent, providedIn: "root" });
    ZiggeoRecorderComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-recorder',
            template: "<div #ziggeorecorder ></div>"
        })
    ], ZiggeoRecorderComponent);
    return ZiggeoRecorderComponent;
}());
export { ZiggeoRecorderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLXJlY29yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsiemlnZ2VvLXJlY29yZGVyL3ppZ2dlby1yZWNvcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsU0FBUyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRXBFOztHQUVHO0FBTUg7SUFDRSxpQ0FBb0IsUUFBaUM7UUFBakMsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7SUFBRyxDQUFDOztnQkFBM0IsdUJBQXVCOzs7SUFEMUMsdUJBQXVCO1FBTG5DLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSw4QkFBOEI7U0FDekMsQ0FBQztPQUNXLHVCQUF1QixDQUVuQztrQ0FmRDtDQWVDLEFBRkQsSUFFQztTQUZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsIENvbXBvbmVudFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7WmlnZ2VvUmVjb3JkZXJEaXJlY3RpdmV9IGZyb20gJy4vemlnZ2VvLXJlY29yZGVyLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogWmlnZ2VvUmVjb3JkZXJcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ppZ2dlby1yZWNvcmRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAjemlnZ2VvcmVjb3JkZXIgPjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgWmlnZ2VvUmVjb3JkZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlY29yZGVyOiBaaWdnZW9SZWNvcmRlckRpcmVjdGl2ZSkge31cbn1cbiJdfQ==