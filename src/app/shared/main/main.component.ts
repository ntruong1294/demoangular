import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint/endpoint.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  agentAPI = '';
  constructor(private endpoint: EndpointService) { }

  ngOnInit() {
    this.agentAPI = this.endpoint.API.PRODUCT_ENGINE;
  }

}
