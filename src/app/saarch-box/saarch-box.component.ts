import { RestApiCallService } from './../services/rest-api-call.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { SAMPLE_RESULTS } from './sample-results';

import { map, startWith, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-saarch-box',
  templateUrl: './saarch-box.component.html',
  styleUrls: ['./saarch-box.component.css']
})
export class SaarchBoxComponent implements OnInit {

  searchControl: FormControl;

  filteredResults$: Observable<string[]>;

  results = SAMPLE_RESULTS;

  searchCodeResults: any = [];
  query: string ; language: string ; repoOrUser: string ; isRepo: string ;

  constructor( private restApiCallService: RestApiCallService) {
    this.searchControl = new FormControl('');
    // this.filteredResults$ =
     this.searchControl.valueChanges
    .subscribe( val => {
      val = this.filterResults(val);
      this.filteredResults$ = of(val);
    });
      // .startWith(' ')
      // .map(val => this.filterResults(val))
      // .map(val => val.slice(0, 4));
  }

  private filterResults(val: string): string[] {
    return val ? this.results.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) === 0) : [];
  }

  ngOnInit() {
  }

  searchCode() {
    this.searchCodeResults = [];
    this.restApiCallService.getGithubApiSearchCodeResults(
      this.query, this.language, this.repoOrUser, this.isRepo
    ).subscribe(
      data => {
      console.log('searchCode result => ' + JSON.stringify(data));
      this.searchCodeResults = data;
    },
    (error) => {
      console.log('error occured => ' + JSON.stringify(error));
    });
  }
}
