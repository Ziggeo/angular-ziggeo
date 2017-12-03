/* SystemJS module definition */

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// ZiggeoApi
declare const ZiggeoApi: any;
namespace ZiggeoApi {
    export interface V2 {
        Application: any;
        Player: any;
   }
}