/* SystemJS module definition */

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// ZiggeoApi
declare const ZiggeoApi;
interface ZiggeoApi {
  V2: object;
}
// interface ZiggeoApi {
//   V2.Application: object,
//   V2.Player: object
// }

