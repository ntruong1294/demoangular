import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myData: Array<any>;
  constructor(private http: Http) {

    this.http.get('http://learnangular.getsandbox.com/getimages')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }
}
