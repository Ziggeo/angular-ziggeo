import { __decorate } from "tslib";
import { Injectable, Component } from '@angular/core';
import { ZiggeoAudioPlayerDirective } from './ziggeo-audio-player.directive';
import * as i0 from "@angular/core";
import * as i1 from "./ziggeo-audio-player.directive";
/**
 * ZiggeoAudioPlayer
 */
let ZiggeoAudioPlayerComponent = class ZiggeoAudioPlayerComponent {
    constructor(audioPlayer) {
        this.audioPlayer = audioPlayer;
    }
};
ZiggeoAudioPlayerComponent.ctorParameters = () => [
    { type: ZiggeoAudioPlayerDirective }
];
ZiggeoAudioPlayerComponent.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZiggeoAudioPlayerComponent_Factory() { return new ZiggeoAudioPlayerComponent(i0.ɵɵinject(i1.ZiggeoAudioPlayerDirective)); }, token: ZiggeoAudioPlayerComponent, providedIn: "root" });
ZiggeoAudioPlayerComponent = __decorate([
    Injectable({ providedIn: 'root' }),
    Component({
        selector: 'ziggeo-audio-player',
        // TODO: check the same in player why #selector is missing
        template: `<div #ziggeoaudioplayer></div>`
    })
], ZiggeoAudioPlayerComponent);
export { ZiggeoAudioPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnZ2VvLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXppZ2dlby8iLCJzb3VyY2VzIjpbInppZ2dlby1hdWRpby1wbGF5ZXIvemlnZ2VvLWF1ZGlvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFFN0U7O0dBRUc7QUFPSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUNyQyxZQUFvQixXQUF1QztRQUF2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBNEI7SUFBRyxDQUFDO0NBQ2hFLENBQUE7O1lBRGtDLDBCQUEwQjs7O0FBRGhELDBCQUEwQjtJQU50QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQiwwREFBMEQ7UUFDMUQsUUFBUSxFQUFFLGdDQUFnQztLQUMzQyxDQUFDO0dBQ1csMEJBQTBCLENBRXRDO1NBRlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBaaWdnZW9BdWRpb1BsYXllckRpcmVjdGl2ZSB9IGZyb20gJy4vemlnZ2VvLWF1ZGlvLXBsYXllci5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIFppZ2dlb0F1ZGlvUGxheWVyXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd6aWdnZW8tYXVkaW8tcGxheWVyJyxcbiAgLy8gVE9ETzogY2hlY2sgdGhlIHNhbWUgaW4gcGxheWVyIHdoeSAjc2VsZWN0b3IgaXMgbWlzc2luZ1xuICB0ZW1wbGF0ZTogYDxkaXYgI3ppZ2dlb2F1ZGlvcGxheWVyPjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgWmlnZ2VvQXVkaW9QbGF5ZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1ZGlvUGxheWVyOiBaaWdnZW9BdWRpb1BsYXllckRpcmVjdGl2ZSkge31cbn1cbiJdfQ==