### Angular-Ziggeo SDK for Angular versions 9 and higher

You can find working demo with code example [here](https://github.com/Ziggeo/angular-ziggeo/blob/master/projects/angular-ziggeo-demo/)

#### Basic usage:
    1. Be sure that `ziggeo-client-sdk` (probably it is already there, as it's in the dependency list) and Angular core packages are installed.
    
    2. include Ziggeo Assets to your `angular.json` file in you demo project
 ```metadata json
  "architect": {
    "build": {
        ...
        "styles": [
          ...
          "node_modules/ziggeo-client-sdk/build/ziggeo.css",
          ...
        ],
        "scripts": [
          ...
          "node_modules/ziggeo-client-sdk/build/ziggeo.js"
          ...
        ]
      },
    },
  } 
```
    3. Import Ziggeo Mdule in your root NgModule
```angular2
    ...
    import { ZiggeoModule } from 'angular-ziggeo';
    ...

    @NgModule({
      declarations: [
    ...
        RecorderComponent,
        PlayerComponent
    ...
      ],
      imports: [
    ...
        ZiggeoModule,
    ...
      ],
    ...
    })
    export class AppModule { }
```
    4. After you can use embedding event inside your Components on this way:

###### Recorder Component
```angular2
@Component({
    selector: 'app-recorder',
    templateUrl: './recorder.component.html'
})
export class RecorderComponent implements AfterViewChecked {
    title = 'Home page';
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: any;

    ngAfterViewChecked(): void {
        if (!this.recorder && typeof this.ziggeorecorder.recorder.recorderInstance !== 'undefined') {
          this.recorder = this.ziggeorecorder.recorder.recorderInstance;

          this.recorder.on('recording', () => {
              console.log('Recorder in progress');
          }, this);

          this.recorder.on('access_granted', () => {
              console.log('Recorder has camera access');
          }, this);

          this.recorder.on('verified', () => {
              console.log('playing your action here');
          }, this);
        }
    }
}
```
`recorder.component.html` :
```angular2html
    <ziggeo-recorder #ziggeorecorder
         [apiKey]="'ZIGGEO_API_KEY'"
         [options]="{height: 220, width: 340, l10n: 'en'}"
    ></ziggeo-recorder>
```

###### Player Component
```angular2
@Component({
    selector: 'app-player',
    templateUrl: './player.component.html'
})
export class PlayerComponent implements AfterViewChecked {
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: any;

    ngAfterViewChecked(): void {
        if (!this.player && typeof this.ziggeoplayer.player.playerInstance !== 'undefined') {
            this.player = this.ziggeoplayer.player.playerInstance;
            this.player.on('attached', () => {
                console.log('Attached');
            });

            this.player.on('playing', () => {
                console.log('Playing your action here');
            });

            this.player.on('paused', () => {
                console.log('Paused, your action here');
            });
            
            // And more other available Player events
        }
    }
}
```

`player.component.html` :
```angular2html
    <ziggeo-player #ziggeoplayer
       [apiKey]="'Ziggeo_API_key'"
       [options]="{video: 'Video Token', theme:'modern', width: 520, l10n: 'de'}"
    ></ziggeo-player>
```

 
 Changelog: <br/>
    - v3.0.0 started supporting Angular 9
