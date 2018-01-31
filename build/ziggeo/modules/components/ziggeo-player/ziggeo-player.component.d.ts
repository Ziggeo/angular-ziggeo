import { DoCheck, AfterViewInit, OnDestroy } from '@angular/core';
import { ZiggeoPlayerService } from './ziggeo-player.service';
export declare class ZiggeoPlayerComponent implements DoCheck, AfterViewInit, OnDestroy {
    private _ziggeoPlayerService;
    ziggeoplayer: any;
    options: any;
    apiKey: string;
    playerInstance: any;
    private _events;
    private _application;
    constructor(_ziggeoPlayerService: ZiggeoPlayerService);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
