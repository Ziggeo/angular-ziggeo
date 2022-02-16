/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// ZiggeoApi
declare const ZiggeoApi: any;
declare namespace ZiggeoApi.V2 {
  interface V2 {
    Application: any;
    Player: any;
    Recorder: any;
    AudioPlayer: any;
    AudioRecorder: any;
  }
}
