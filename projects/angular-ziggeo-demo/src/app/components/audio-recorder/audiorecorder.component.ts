import {
    Component,
    OnInit,
    ViewChild,
    AfterViewChecked
} from '@angular/core';

declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
    interface V2 {
        Application: any;
        AudioRecorder: any;
    }
}

@Component({
    selector: 'app-audio-recorder',
    templateUrl: './audiorecorder.component.html'
})

export class AudioRecorderComponent implements OnInit, AfterViewChecked {
    title = 'Home page';
    // ZIGGEO_API: string = API_KEY;
    audioRecorder: any;
    @ViewChild('ziggeoaudiorecorder') ziggeoaudiorecorder: any;

    ngOnInit() {
        ZiggeoApi.V2.Locale.mediaLocale.register({'ba-audiorecorder-controlbar.stop': 'Finish Recorder'}, 10);
        ZiggeoApi.V2.Locale.mediaLocale.register({'ba-audiorecorder-controlbar.stop-tooltip': 'Finish Recorder'}, 10);
    }

    ngAfterViewChecked(): void {
        if (!this.audioRecorder && typeof this.ziggeoaudiorecorder.audioRecorder.audioRecorderInstance !== 'undefined') {
          this.audioRecorder = this.ziggeoaudiorecorder.audioRecorder.audioRecorderInstance;

          this.audioRecorder.on('recording', () => {
              console.log('Audio Recorder in progress');
          }, this);

          this.audioRecorder.on('access_granted', () => {
              console.log('Audio Recorder has camera access');
          }, this);

          this.audioRecorder.on('verified', () => {
              console.log('Audio playing your action here');
          }, this);
        }
    }
}
