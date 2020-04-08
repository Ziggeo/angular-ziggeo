import { Injectable } from '@angular/core';
var ZiggeoRecorderService = /** @class */ (function () {
    function ZiggeoRecorderService() {
    }
    // get All recorder Events
    ZiggeoRecorderService.prototype.getEvents = function () {
        return {
            attached: 'onAttached',
            loaded: 'onLoaded',
            playing: 'onPlaying',
            paused: 'onPaused',
            ended: 'onEnded',
            seek: 'onSeek',
            error: 'onError',
            manuallysubmitted: 'onManuallySubmitted',
            recordingprogress: 'onRecordingProgress',
            uploaded: 'onUploaded',
            uploadselected: 'onUploadSelected',
            recording: 'onRecording',
            uploading: 'onUploading',
            recorder: 'onRerecord',
            countdown: 'onCountdown',
            progress: 'onProgress',
            uploadprogress: 'onUploadProgress',
            processing: 'onProcessing',
            processed: 'onProcessed',
            accessforbidden: 'onAccessForbidden',
            accessgranted: 'onAccessGranted',
            cameraunresponsive: 'onCameraUnresponsive',
            verified: 'onVerified',
            nocamera: 'onNoCamera',
            nomicrophone: 'onNoMicrophone'
        };
    };
    ZiggeoRecorderService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZiggeoRecorderService.ctorParameters = function () { return []; };
    return ZiggeoRecorderService;
}());
export { ZiggeoRecorderService };
//# sourceMappingURL=ziggeo-recorder.service.js.map