import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ZiggeoPlayerModule } from './ziggeo-player/ziggeo-player.module';
import { ZiggeoRecorderModule } from './ziggeo-recorder/ziggeo-recorder.module';
const ZIGGEO_MODULES = [
    ZiggeoPlayerModule,
    ZiggeoRecorderModule
];
let ZiggeoModule = class ZiggeoModule {
};
ZiggeoModule = __decorate([
    NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
], ZiggeoModule);
export { ZiggeoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItemlnZ2VvLyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRixNQUFNLGNBQWMsR0FBRztJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFHRixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFEeEIsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUM7R0FDbEQsWUFBWSxDQUFHO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFppZ2dlb1BsYXllck1vZHVsZSB9IGZyb20gJy4vemlnZ2VvLXBsYXllci96aWdnZW8tcGxheWVyLm1vZHVsZSc7XG5pbXBvcnQgeyBaaWdnZW9SZWNvcmRlck1vZHVsZSB9IGZyb20gJy4vemlnZ2VvLXJlY29yZGVyL3ppZ2dlby1yZWNvcmRlci5tb2R1bGUnO1xuXG5jb25zdCBaSUdHRU9fTU9EVUxFUyA9IFtcbiAgWmlnZ2VvUGxheWVyTW9kdWxlLFxuICBaaWdnZW9SZWNvcmRlck1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHsgaW1wb3J0czogWklHR0VPX01PRFVMRVMsIGV4cG9ydHM6IFpJR0dFT19NT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgWmlnZ2VvTW9kdWxlIHt9XG5cbiJdfQ==