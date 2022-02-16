import { DoCheck, ElementRef, NgZone, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { ZiggeoAudioPlayerConfig } from './ziggeo-audio-player.config';
export declare class ZiggeoAudioPlayerDirective implements AfterViewInit, DoCheck, OnDestroy {
    private element;
    private renderer;
    private ngZone;
    private readonly config;
    _element: any;
    private _application;
    private _appOptions;
    private _app_options;
    apiKey: string;
    options: any;
    audioPlayerInstance: any;
    constructor(element: ElementRef, renderer: Renderer2, ngZone: NgZone, config: ZiggeoAudioPlayerConfig);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
