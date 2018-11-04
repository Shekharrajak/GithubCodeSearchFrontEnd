import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { SAMPLE_RESULTS } from './sample-results';

import { map, startWith } from 'rxjs/operators';
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

  constructor() {
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

  }
}
