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
        Recorder: any;
    }
}

@Component({
    selector: 'app-recorder',
    templateUrl: './recorder.component.html'
})
export class RecorderComponent implements OnInit, AfterViewChecked {
    title = 'Home page';
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: any;

    ngOnInit() {
        ZiggeoApi.V2.Locale.mediaLocale.register({'ba-videorecorder-controlbar.stop': 'Finish Recorder'}, 10);
        ZiggeoApi.V2.Locale.mediaLocale.register({'ba-videorecorder-controlbar.stop-tooltip': 'Finish Recorder'}, 10);
    }

    ngAfterViewChecked(): void {
        if (!this.recorder && typeof this.ziggeorecorder.recorder.recorderInstance !== 'undefined') {
          this.recorder = this.ziggeorecorder.recorder.recorderInstance;

          this.recorder.on('recording', () => {
              console.log('Recorder in progress');
          }, this);

          this.recorder.on('access_granted', () => {
              console.log('Recorder has camera access');
          }, this);

          this.recorder.on('verified', () => {
              console.log('playing your action here');
          }, this);
        }
    }
}
