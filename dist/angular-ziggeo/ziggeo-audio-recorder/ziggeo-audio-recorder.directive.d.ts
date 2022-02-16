import { DoCheck, ElementRef, NgZone, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { ZiggeoAudioRecorderConfig } from './ziggeo-audio-recorder.config';
export declare class ZiggeoAudioRecorderDirective implements AfterViewInit, DoCheck, OnDestroy {
    private element;
    private renderer;
    private ngZone;
    private readonly config;
    _element: any;
    private _application;
    private _appOptions;
    apiKey: string;
    options: any;
    audioRecorderInstance: any;
    constructor(element: ElementRef, renderer: Renderer2, ngZone: NgZone, config: ZiggeoAudioRecorderConfig);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
