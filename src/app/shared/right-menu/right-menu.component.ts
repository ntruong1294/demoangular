import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  mainMenuItems = [{
    title: 'menuCustomerList',
    icon: 'sync',
    state: 'app.customerList',
    class: '',
    protect: false // true / false
  },
  {
    title: 'advisorProfile',
    icon: 'face',
    state: 'app.advisorProfile',
    class: '',
    protect: false // true / false
  },
  {
    title: 'productList',
    icon: 'security',
    state: 'app.productList',
    class: '',
    protect: false // true / false
  },
  {
    title: 'proposalList',
    icon: 'security',
    state: 'app.proposalList',
    class: 'disable-click',
    protect: false
  },
  {
    title: 'resourceLibrary',
    icon: 'info',
    state: 'app.resourceLibrary',
    class: '',
    protect: false // true / false
  }, {
    title: 'referralList',
    icon: 'info',
    state: 'app.referralList',
    class: '',
    protect: false // true / false
  },
  {
    title: 'applicationList',
    icon: 'info',
    state: 'app.myapplicationList',
    class: 'disable-click',
    protect: false
  },
  {
    title: 'settings',
    icon: 'android',
    state: 'app.settings',
    class: '',
    protect: false // true / false
  },
  {
    title: 'support',
    icon: 'info',
    state: 'app.support',
    class: 'disable-click',
    protect: false
  }
  ];
  constructor() { }

  ngOnInit() {

  }

}
