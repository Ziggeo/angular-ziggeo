import {
    Component,
    OnInit,
    AfterViewChecked,
    ViewChild
    //, ElementRef
} from '@angular/core';

@Component({
    selector: 'ziggeo-player',
    template: `
    <div #ziggeoplayer></div>
`
})

export class ZiggeoPlayerComponent implements OnInit, AfterViewChecked {

    @ViewChild('ziggeoplayer') ziggeoplayer;
    // private elementRef: ElementRef;
    // private ziggeoApi: ZiggeoApi;
    private video = 'b2a4a22bd7aff2a38e2204954a2fcc73';
    private apiKey = '18bc7c2cf9edb8693d3c1c54198599b1';
    private application: object = null;
    private player: object = null;

    constructor () {}

    // constructor (elementRef: ElementRef, ziggeoApi: ZiggeoApi) {
    //     this.elementRef = this.elementRef;
    //     this.ziggeoApi = ziggeoApi;
    //     // this.application = this.ziggeoApi.V2.Application.instanceByToken(this.apiKey);
    // }

    ngOnInit () {
        this.application = new ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        // this.application = this.ziggeoApi.V2.Application({
        //     token: '18bc7c2cf9edb8693d3c1c54198599b1'
        // });
    }

    ngAfterViewChecked() {
        console.log('ziggeo Api', ZiggeoApi.V2);
        // this.player = new this.ziggeoApi.V2.Player({
        this.player = new ZiggeoApi.V2.Player({
            element: this.ziggeoplayer,
            attrs: {
                video: this.video,
                width: 320,
                height: 240,
                forceflash: false
            }
        });
    }
}
