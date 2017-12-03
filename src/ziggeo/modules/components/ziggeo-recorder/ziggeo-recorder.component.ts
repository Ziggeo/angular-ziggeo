import {
    Component,
    DoCheck,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    Input
} from '@angular/core';
import { ZiggeoRecorderService } from './ziggeo-recorder.service';

@Component({
    selector: 'ziggeo-recorder',
    providers: [ ZiggeoRecorderService ],
    template: `<div #ziggeorecorder [apiKey]="apiKey" [options]="options"></div>`
})
export class ZiggeoRecorderComponent implements DoCheck, AfterViewInit, OnDestroy {
    @ViewChild('ziggeorecorder') ziggeorecorder;
    @Input() apiKey: string;
    @Input() options: any = {};
    private _recorderInstance: any;
    private _application: object = null;
    private _events: any = {};

    constructor (private _ziggeoRecorderService: ZiggeoRecorderService) {
        this._events = _ziggeoRecorderService.getEvents();
    }

    ngDoCheck () {
        if (this.apiKey) {
            this._application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        }
    }

    ngAfterViewInit () {
        if (this._application) {
            this._recorderInstance = new ZiggeoApi.V2.Recorder({
                element: this.ziggeorecorder.nativeElement,
                attrs: this.options
            }, this);
            if (typeof this._recorderInstance.activate === 'function') {
                this._recorderInstance.activate();
            } else {
                console.warn('Issue with launching recorder with Angular');
            }
        }
    }

    ngOnDestroy () {
        if (this._recorderInstance && typeof this._recorderInstance.destroy === 'function') {
            this._recorderInstance.destroy();
        }
    }
}
