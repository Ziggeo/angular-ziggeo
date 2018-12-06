import { DoCheck, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { ZiggeoRecorderService } from './ziggeo-recorder.service';
export declare class ZiggeoRecorderComponent implements DoCheck, AfterViewInit, OnDestroy {
    private _ziggeoRecorderService;
    private ngZone;
    ziggeorecorder: any;
    apiKey: string;
    options: any;
    recorderInstance: any;
    private _application;
    private _events;
    private _app_options;
    constructor(_ziggeoRecorderService: ZiggeoRecorderService, ngZone: NgZone);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
