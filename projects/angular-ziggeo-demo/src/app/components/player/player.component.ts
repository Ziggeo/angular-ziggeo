import {
    Component,
    ViewChild, AfterViewChecked
} from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html'
})
export class PlayerComponent implements AfterViewChecked {
    title = 'Player component';
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: any;

    ngAfterViewChecked(): void {
        if (!this.player && typeof this.ziggeoplayer.player.playerInstance !== 'undefined') {
            this.player = this.ziggeoplayer.player.playerInstance;
            this.player.on('attached', () => {
                console.log('Attached');
            });

            this.player.on('playing', () => {
                console.log('Playing your action here');
            });

            this.player.on('paused', () => {
                console.log('Paused, your action here');
            });
        }
    }
}
