## Ziggeo Angular for Angular 2-7

#### Setup
- Install all peerDependencies (Angular).  No need for `ziggeo-client-sdk` as it's already a dependency of this package.
- Install all dependencies via `npm install`
- For UMD use, you can include `ZiggeoModule` from `ziggeo-angular` package directly.
  Example: `import {ZiggeoModule} from 'angular-ziggeo'`
- For `AOT` ready need to include directly from path.
  Example: `import { ZiggeoModule } from 'root_path/node_modules/angular-ziggeo/build/ziggeo/index'`

- For production and AOT mode (starting from Angular 5), add to `.angular-cli.json` or `angular.json`:
```json
      "styles": [
        "../node_modules/ziggeo-client-sdk/build/ziggeo.css"
      ],
      "scripts": [
        "../node_modules/ziggeo-client-sdk/build/ziggeo.js"
      ],
```
- For older versions with Webpack, please add tovendor file:
```js
    import 'ziggeo-client-sdk/build/ziggeo.css';
    import 'ziggeo-client-sdk/build/ziggeo.js';
```
- Start server with `ng serve`, and add parameters `--prod` for production and `--aot` for AOT.

See our working demos for [Angular 5](https://github.com/Ziggeo/angular-ziggeo-demo) as well as for
[Angular 2+4](https://github.com/Ziggeo/angular2-ziggeo-demo).

### CHANGE LOGS
- v0.1.1
    -- Added screen recorder options:
    ```
    [options]="{ ...,
        allowscreen: true,
        chrome_extension_id: 'Your chrome extension ID',
        chrome_extension_install_link: 'Your link to chrome extension installation',
        opera_extension_id: 'Your opera extension ID',
        opera_extension_install_link: 'Your link to opera extension installation'
    ...}"
    ```

    Screen Capture is currently supported by Firefox, Chrome and Opera. <br/>
    - Firefox: Direct support -- no extensions or plugins required <br/>
    - Chrome + Opera: use extension builder located in your application manager <br/>

    Note: By default Ziggeo Chrome/Opera extension will be set to `Ziggeo screen recorder` extension which will be available only in `localhost`. <br/>
    [For more info](https://ziggeo.com/features/screen-recording), in this url you also can find how to set your own extensions <br/>

- v0.1.2 <br/>
    -- Add locale setting : `[options]="{ ..., l10n: 'de', ...}"` <br/>
    -- Possibility set `webrtc_streaming` to `true` : `[options]="{ ..., webrtc_streaming: true, ...}"`

- v0.1.3 <br/>
    -- Add Auth setting : `[options]="{ ..., auth: true, ...}"`, by default it's false <br/>

- v0.2.0 <br/>
    -- Upgraded to `ziggeo-client-sdk@^2.32.1` <br/>

- v0.3.0 <br/>
    -- Downgraded to `ziggeo-client-sdk@^2.31.2` as `2.32.1` still not stable version, will upgrade later <br/>

- v1.0.0 <br/>
    -- Upgraded to `ziggeo-client-sdk@^2.32.*` to fix FireFox related bug <br/>

- v2.0.0 <br/>
    1. Upgraded to `ziggeo-client-sdk@^2.33.*` <br/>
    2. Took Ziggeo initialization out of Angular Zone
    <br/>
- v2.1.0 <br/>
    1. Took Ziggeo Instance also out of Angular Ziggeo
    <br/>

## Examples

### Change text on your embedding
```js
ngOnInit () {
  ZiggeoApi.V2.Locale.mediaLocale.register({
    "ba-videorecorder-chooser.record-video": "Rec", //Record button
    "ba-videorecorder-controlbar.stop": "End"       //Stop button
    }, 10);
}
```
