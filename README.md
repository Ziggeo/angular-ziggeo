## Installation

I'ts model container not application itself 
- `npm run build` to build application inside.
- `npm pack` will appear file with name `angular-ziggeo-1.0.0.tgz` in root folder

In demo folder run 
- Install all dependencies `npm install`
- Add pack to root folder `npm istall /path_to_this_folder/angular-ziggeo-1.0.0.tgz`
- Remove folder from demo app `rm -rf node_modules/angular-ziggeo/build`
- Add link `ln -s ~/path_to/angular-ziggeo/build/ ~/path_to/angular-ziggeo-demo/node_modules/angular-ziggeo/`
- and start server with `ng serve`

Each time you will made changes in component rebuild app, demo app will restart as it will be in watch mode.