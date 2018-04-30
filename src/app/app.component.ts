import { Component, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloComponent} from './react/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  helloComponent: HelloComponent;

  ngOnInit() {
    this.helloComponent = ReactDOM.render(
      React.createElement(HelloComponent), 
      document.getElementById('hello'));
  }
}
