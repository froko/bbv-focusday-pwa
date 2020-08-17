import { Component } from '@angular/core';

interface NavigationItem {
  title: string;
  icon: string;
  routerLink: string[];
}

@Component({
  selector: 'bbv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Focus Day 2020 Q3 - Remote';
  navigationItems: NavigationItem[] = [
    {
      title: 'Programm',
      icon: 'schedule',
      routerLink: ['schedule']
    },
    {
      title: 'Inhalt',
      icon: 'speaker_notes',
      routerLink: ['content']
    },
    {
      title: 'Board',
      icon: 'supervisor_account',
      routerLink: ['board']
    }
  ];
}
