import { Injectable } from '@angular/core';

@Injectable()
export class ZiggeoPlayerService {
    // Get Available Properties list
    getProperties () {
        return {
            width: 'number',
            height: 'number',
            responsive: 'boolean',
            skipinitial: 'boolean'
        };
    }

    // Get all events list
    getEvents () {
        return {
            attached: 'onAttached',
            loaded: 'onLoaded',
            playing: 'onPlaying',
            paused: 'onPaused',
            ended: 'onEnded',
            error: 'onError',
            seek: 'onSeek'
        };
    }
}