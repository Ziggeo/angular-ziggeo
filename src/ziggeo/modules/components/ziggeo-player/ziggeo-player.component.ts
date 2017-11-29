import {
    Component,
    OnInit,
    AfterViewChecked,
    ViewChild,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'ziggeo-player',
    template: `<div #ziggeoplayer></div>`
})
export class ZiggeoPlayerComponent implements OnInit, AfterViewChecked {

    @ViewChild('ziggeoplayer') ziggeoplayer;
    ziggeoApplication: ZiggeoApi.V2;
    // private elementRef: ElementRef;
    private video = 'b2a4a22bd7aff2a38e2204954a2fcc73';
    private apiKey = '18bc7c2cf9edb8693d3c1c54198599b1';
    private application: object = null;
    private player: object = null;
    playerInstance: object = null;

    // constructor () {}
    constructor () {
        this.ziggeoApplication = ZiggeoApi.V2;
        // this.application = this.ziggeoApplication.Application.instanceByToken(this.apiKey);
        // this.playerInstance = ZiggeoApi.V2.Player;
    }

    // constructor (elementRef: ElementRef, ziggeoApplication: ZiggeoApi.V2.Application) {
    //     this.elementRef = this.elementRef;
    //     this.ziggeoApplication = ziggeoApplication;
    //     this.application = this.ziggeoApplication.instanceByToken(this.apiKey);
    // }

    ngOnInit () {
        this.application = this.ziggeoApplication.Application.instanceByToken(this.apiKey);
        // this.application = this.ziggeoApi.V2.Application({
        //     token: '18bc7c2cf9edb8693d3c1c54198599b1'
        // });
        this.player = new ZiggeoApi.V2.Player({
            element: this.ziggeoplayer.nativeElement,
            attrs: {
                video: this.video,
                width: 320,
                height: 240,
                forceflash: false
            }
        }).activate();
    }

    ngAfterViewChecked () {
        console.log('---::A');
        // this.player.activate();
        // this.application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);

        // console.log('ziggeo Api', ZiggeoApi.V2);
        // this.player = new this.ziggeoApi.V2.Player({
    }
}
