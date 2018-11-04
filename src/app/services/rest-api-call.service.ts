import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const END_POINT = 'http://localhost:8000/api/v1/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestApiCallService {


  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getGithubApiSearchCodeResults(q, language, repoOrUser, isRepo) {
    const params = new HttpParams().set('q', q).set('language', language).set('repoOrUser', repoOrUser).set('isRepo', isRepo);
    const link = END_POINT + 'searchcode';
     return this.http.get(link, {params})
     .pipe(
       tap( (data) => map(this.extractData), (error) => Observable.throw(error) )
     );
  }
}
