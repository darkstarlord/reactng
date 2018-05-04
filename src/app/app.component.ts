import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloComponent} from './react/hello.component';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  helloComponent: HelloComponent;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private titleService: Title) { }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));

    this.helloComponent = ReactDOM.render(
      React.createElement(HelloComponent), 
      document.getElementById('hello'));
  }
}
