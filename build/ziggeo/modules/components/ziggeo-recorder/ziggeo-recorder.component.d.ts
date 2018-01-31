import { DoCheck, AfterViewInit, OnDestroy } from '@angular/core';
import { ZiggeoRecorderService } from './ziggeo-recorder.service';
export declare class ZiggeoRecorderComponent implements DoCheck, AfterViewInit, OnDestroy {
    private _ziggeoRecorderService;
    ziggeorecorder: any;
    apiKey: string;
    options: any;
    recorderInstance: any;
    private _application;
    private _events;
    private _app_options;
    constructor(_ziggeoRecorderService: ZiggeoRecorderService);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
