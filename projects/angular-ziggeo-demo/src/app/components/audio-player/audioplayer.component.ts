import {
    Component,
    ViewChild, AfterViewChecked
} from '@angular/core';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audioplayer.component.html'
})
export class AudioPlayerComponent implements AfterViewChecked {
    title = 'Audio Player Component';
    audioPlayer: any;
    @ViewChild('ziggeoaudioplayer') ziggeoaudioplayer: any;

    ngAfterViewChecked(): void {
        if (!this.audioPlayer && typeof this.ziggeoaudioplayer.audioPlayer.audioPlayerInstance !== 'undefined') {
            this.audioPlayer = this.ziggeoaudioplayer.audioPlayer.audioPlayerInstance;
            this.audioPlayer.on('attached', () => {
                console.log('Audio Player Attached');
            });

            this.audioPlayer.on('playing', () => {
                console.log('Audio Playing your action here');
            });

            this.audioPlayer.on('paused', () => {
                console.log('Audio Paused, your action here');
            });
        }
    }
}
