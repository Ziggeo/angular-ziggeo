## Ziggeo Angular implementation for versions 2, 4 and 5

#### Installation in your own project
- You should already have been installed all peerDependencies (Angular) including `ziggeo-client-sdk`.
- Install all dependencies `npm install`
- For UMD use you can include `ZiggeoModule` from `ziggeo-angular` package directly.<br/>
Example: `import {ZiggeoModule} from 'angular-ziggeo'`
- For `AOT` ready need to include directly from path <br/>
import { ZiggeoModule } from 'root_path/node_modules/angular-ziggeo/build/ziggeo/index';

- Include for production and AOT mode starting from Angular 5 to .angular-cli.json
```
      "styles": [
        "../node_modules/ziggeo-client-sdk/build/ziggeo.css"
      ],
      "scripts": [
        "../node_modules/ziggeo-client-sdk/build/ziggeo.js"
      ],
```
for older versions with webpack need include to vendor file:
```
    import 'ziggeo-client-sdk/build/ziggeo.css';
    import 'ziggeo-client-sdk/build/ziggeo.js';
```
- and start server with `ng serve` also ready for production `--prod` and AOT `--aot`

ready to use sample (demo with latest version)[https://github.com/Ziggeo/angular-ziggeo-demo]
and (demo applicable for v2 & v4)[https://github.com/Ziggeo/angular2-ziggeo-demo]


#### To use current repo and improve it
I'ts model container not application itself
- `npm run build` to build application inside.
- After for development you can run watch mode with `npm run build:watch`
