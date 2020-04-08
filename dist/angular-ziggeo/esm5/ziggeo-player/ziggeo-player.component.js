import { __decorate } from "tslib";
import { Injectable, Component } from '@angular/core';
import { ZiggeoPlayerDirective } from './ziggeo-player.directive';
import * as i0 from "@angular/core";
import * as i1 from "./ziggeo-player.directive";
/**
 * ZiggeoPlayer
 */
var ZiggeoPlayerComponent = /** @class */ (function () {
    function ZiggeoPlayerComponent(player) {
        this.player = player;
    }
    ZiggeoPlayerComponent.ctorParameters = function () { return [
        { type: ZiggeoPlayerDirective }
    ]; };
    ZiggeoPlayerComponent.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZiggeoPlayerComponent_Factory() { return new ZiggeoPlayerComponent(i0.ɵɵinject(i1.ZiggeoPlayerDirective)); }, token: ZiggeoPlayerComponent, providedIn: "root" });
    ZiggeoPlayerComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-player',
            template: "<div></div>"
        })
    ], ZiggeoPlayerComponent);
    return ZiggeoPlayerComponent;
}());
export { ZiggeoPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1wbGF5ZXIvemlnZ2VvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsU0FBUyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRWxFOztHQUVHO0FBTUg7SUFDRSwrQkFBb0IsTUFBNkI7UUFBN0IsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7SUFBRyxDQUFDOztnQkFBekIscUJBQXFCOzs7SUFEdEMscUJBQXFCO1FBTGpDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDO09BQ1cscUJBQXFCLENBRWpDO2dDQWZEO0NBZUMsQUFGRCxJQUVDO1NBRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBBZnRlclZpZXdDaGVja2VkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWmlnZ2VvUGxheWVyRGlyZWN0aXZlIH0gZnJvbSAnLi96aWdnZW8tcGxheWVyLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogWmlnZ2VvUGxheWVyXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd6aWdnZW8tcGxheWVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgWmlnZ2VvUGxheWVyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5ZXI6IFppZ2dlb1BsYXllckRpcmVjdGl2ZSkge31cbn1cbiJdfQ==