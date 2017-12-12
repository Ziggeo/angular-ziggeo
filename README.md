## Ziggeo Angular for Angular 2-5

#### Setup
- Install all peerDependencies (Angular) including `ziggeo-client-sdk`.
- Install all dependencies via `npm install`
- For UMD use, you can include `ZiggeoModule` from `ziggeo-angular` package directly.
  Example: `import {ZiggeoModule} from 'angular-ziggeo'`
- For `AOT` ready need to include directly from path.
  Example: `import { ZiggeoModule } from 'root_path/node_modules/angular-ziggeo/build/ziggeo/index'`

- For production and AOT mode (starting from Angular 5), add to `.angular-cli.json`:
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
