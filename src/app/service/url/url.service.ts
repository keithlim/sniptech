import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private baseUrl: string;

  constructor(
    private utilityService: UtilityService,
    private httpClient: HttpClient
  ) {
    this.baseUrl = utilityService.rootApi + "/url";
  }

  public postUrl(longUrl: string): Observable<any> {
    let urlencoded = new HttpParams().set("url", longUrl);

    return this.httpClient.post(this.baseUrl + "/posturl", urlencoded, { responseType: 'text' }).pipe(
      catchError(this.utilityService.handleError<any>("postUrl"))
    );
  }

}
