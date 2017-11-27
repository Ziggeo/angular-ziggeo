import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ziggeo-recorder',
  templateUrl: './ziggeo-recorder.component.html'
})
export class ZiggeoRecorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Recorder on init');
  }

}
