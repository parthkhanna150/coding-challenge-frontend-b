import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../departures.service';
import { IHash } from './ihash';


@Component({
  selector:  'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  cityGeo: IHash = {};
  origin = 'New York';
  destination = 'Montreal';
  dateAndTime = '2020-08-02';

  ngOnInit() {
    this.cityGeo[this.origin] = 'dr5reg';
    this.cityGeo[this.destination] = 'f25dvk';
  }

  constructor(private departuresService: DeparturesService) {}

  onSubmit() {
    console.log(this.origin + ' ' + this.destination + ' ' + this.dateAndTime);
    this.departuresService.fetchResults(this.cityGeo[this.origin], this.cityGeo[this.destination], this.dateAndTime);
  }
}
