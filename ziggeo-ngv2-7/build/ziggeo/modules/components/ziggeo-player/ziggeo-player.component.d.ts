import { DoCheck, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { ZiggeoPlayerService } from './ziggeo-player.service';
export declare class ZiggeoPlayerComponent implements DoCheck, AfterViewInit, OnDestroy {
    private _ziggeoPlayerService;
    private ngZone;
    ziggeoplayer: any;
    options: any;
    apiKey: string;
    playerInstance: any;
    private _events;
    private _application;
    private _app_options;
    constructor(_ziggeoPlayerService: ZiggeoPlayerService, ngZone: NgZone);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
