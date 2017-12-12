/* SystemJS module definition */
// declare const ZiggeoModel;
declare namespace ZiggeoModule.ziggeoplayer {
    interface ziggeoplayer {
        playerInstance: any;
    }
}

declare namespace ZiggeoModule.ziggeorecorder {
    interface ziggeorecorder {
        recorderInstance: any;
    }
}


// ZiggeoApi
declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
    interface V2 {
        Application: any;
        Player: any;
        Recorder: any;
   }
}
