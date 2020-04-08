import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ZiggeoPlayerModule } from './ziggeo-player/ziggeo-player.module';
import { ZiggeoRecorderModule } from './ziggeo-recorder/ziggeo-recorder.module';
var ZIGGEO_MODULES = [
    ZiggeoPlayerModule,
    ZiggeoRecorderModule
];
var ZiggeoModule = /** @class */ (function () {
    function ZiggeoModule() {
    }
    ZiggeoModule = __decorate([
        NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
    ], ZiggeoModule);
    return ZiggeoModule;
}());
export { ZiggeoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRixJQUFNLGNBQWMsR0FBRztJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFHRjtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBRHhCLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDO09BQ2xELFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgWmlnZ2VvUGxheWVyTW9kdWxlIH0gZnJvbSAnLi96aWdnZW8tcGxheWVyL3ppZ2dlby1wbGF5ZXIubW9kdWxlJztcbmltcG9ydCB7IFppZ2dlb1JlY29yZGVyTW9kdWxlIH0gZnJvbSAnLi96aWdnZW8tcmVjb3JkZXIvemlnZ2VvLXJlY29yZGVyLm1vZHVsZSc7XG5cbmNvbnN0IFpJR0dFT19NT0RVTEVTID0gW1xuICBaaWdnZW9QbGF5ZXJNb2R1bGUsXG4gIFppZ2dlb1JlY29yZGVyTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoeyBpbXBvcnRzOiBaSUdHRU9fTU9EVUxFUywgZXhwb3J0czogWklHR0VPX01PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9Nb2R1bGUge31cblxuIl19