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
    recorderInstance: any;
    private _application: object = null;
    private _events: any = {};

    constructor (private _ziggeoRecorderService: ZiggeoRecorderService) {
        this._events = _ziggeoRecorderService.getEvents();
    }

    ngDoCheck () {
        if (this.apiKey && !this._application) {
            this._application = ZiggeoApi.Application.instanceByToken(this.apiKey);
        }
    }

    ngAfterViewInit () {
        if (this._application) {
            this.recorderInstance = new ZiggeoApi.V2.Recorder({
                element: this.ziggeorecorder.nativeElement,
                attrs: this.options
            }, this);
            if (typeof this.recorderInstance.activate === 'function') {
                this.recorderInstance.activate();
            } else {
                console.warn('Issue with launching recorder with Angular');
            }
        }
    }

    ngOnDestroy () {
        if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
            this.recorderInstance.destroy();
        }
    }
}
