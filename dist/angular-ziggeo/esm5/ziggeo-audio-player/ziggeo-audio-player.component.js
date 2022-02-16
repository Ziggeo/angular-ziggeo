import { __decorate } from "tslib";
import { Injectable, Component } from '@angular/core';
import { ZiggeoAudioPlayerDirective } from './ziggeo-audio-player.directive';
import * as i0 from "@angular/core";
import * as i1 from "./ziggeo-audio-player.directive";
/**
 * ZiggeoAudioPlayer
 */
var ZiggeoAudioPlayerComponent = /** @class */ (function () {
    function ZiggeoAudioPlayerComponent(audioPlayer) {
        this.audioPlayer = audioPlayer;
    }
    ZiggeoAudioPlayerComponent.ctorParameters = function () { return [
        { type: ZiggeoAudioPlayerDirective }
    ]; };
    ZiggeoAudioPlayerComponent.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZiggeoAudioPlayerComponent_Factory() { return new ZiggeoAudioPlayerComponent(i0.ɵɵinject(i1.ZiggeoAudioPlayerDirective)); }, token: ZiggeoAudioPlayerComponent, providedIn: "root" });
    ZiggeoAudioPlayerComponent = __decorate([
        Injectable({ providedIn: 'root' }),
        Component({
            selector: 'ziggeo-audio-player',
            // TODO: check the same in player why #selector is missing
            template: "<div #ziggeoaudioplayer></div>"
        })
    ], ZiggeoAudioPlayerComponent);
    return ZiggeoAudioPlayerComponent;
}());
export { ZiggeoAudioPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1hdWRpby1wbGF5ZXIvemlnZ2VvLWF1ZGlvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFFN0U7O0dBRUc7QUFPSDtJQUNFLG9DQUFvQixXQUF1QztRQUF2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBNEI7SUFBRyxDQUFDOztnQkFBOUIsMEJBQTBCOzs7SUFEaEQsMEJBQTBCO1FBTnRDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDBEQUEwRDtZQUMxRCxRQUFRLEVBQUUsZ0NBQWdDO1NBQzNDLENBQUM7T0FDVywwQkFBMEIsQ0FFdEM7cUNBZEQ7Q0FjQyxBQUZELElBRUM7U0FGWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFppZ2dlb0F1ZGlvUGxheWVyRGlyZWN0aXZlIH0gZnJvbSAnLi96aWdnZW8tYXVkaW8tcGxheWVyLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogWmlnZ2VvQXVkaW9QbGF5ZXJcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ppZ2dlby1hdWRpby1wbGF5ZXInLFxuICAvLyBUT0RPOiBjaGVjayB0aGUgc2FtZSBpbiBwbGF5ZXIgd2h5ICNzZWxlY3RvciBpcyBtaXNzaW5nXG4gIHRlbXBsYXRlOiBgPGRpdiAjemlnZ2VvYXVkaW9wbGF5ZXI+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBaaWdnZW9BdWRpb1BsYXllckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXVkaW9QbGF5ZXI6IFppZ2dlb0F1ZGlvUGxheWVyRGlyZWN0aXZlKSB7fVxufVxuIl19