import { Injectable } from '@angular/core';

@Injectable()
export class ZiggeoRecorderService {
    // get All recorder Events
    getEvents () {
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
    }
}