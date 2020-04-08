import { DoCheck, ElementRef, NgZone, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { ZiggeoRecorderConfig } from './ziggeo-recorder.config';
export declare class ZiggeoRecorderDirective implements AfterViewInit, DoCheck, OnDestroy {
    private element;
    private renderer;
    private ngZone;
    private readonly config;
    _element: any;
    private _application;
    private _appOptions;
    apiKey: string;
    options: any;
    recorderInstance: any;
    constructor(element: ElementRef, renderer: Renderer2, ngZone: NgZone, config: ZiggeoRecorderConfig);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
