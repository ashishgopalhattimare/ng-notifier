import {Observable, throwError, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, timeout} from 'rxjs/operators';
import {DEFAULT_HEADERS, MethodType, Options} from './config/data.config';

export const dataServiceStub = {
  callRestful(_: string, _1: string, _2?: any): Observable<any> {
    return of([]);
  }
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
    console.log('data service injected');
  }

  callRestful(
      type: MethodType,
      url: string,
      options: Options = {}
  ): Observable<any> {

    options.headers = this.updateRequestHeaders(options.headers, options.excludeHeaders);
    delete options.excludeHeaders;

    switch (type) {
      case 'GET':
        return this.executeRequest(this.http.get(url, options as any));

      case 'POST':
        return this.executeRequest(this.http.post(url, options.body, options as any));

      case 'PUT':
        return this.executeRequest(this.http.put(url, options.body, options as any));

      case 'DELETE':
        return this.executeRequest(this.http.delete(url, options as any));

      case 'UPLOAD':
        return this.executeRequest(
            this.http.post(url, options.body.formData, options as any),
            9000000000
        );

      case 'UPLOAD_PUT':
        return this.executeRequest(
            this.http.put(url, options.body.formData, options as any),
            9000000000
        );
      default:
        return throwError(new Error('Http request method is not supported'));
    }
  }

  updateRequestHeaders(requestHeaders: any = {}, excludeHeaders: string[] = []): {[p: string]: any } {
    Object.keys(DEFAULT_HEADERS)
        .filter(key => !requestHeaders[key])
        .forEach(key => requestHeaders[key] = DEFAULT_HEADERS[key]);

    excludeHeaders.forEach(key => delete requestHeaders[key]);
    return requestHeaders;
  }

  handleError(error: HttpErrorResponse | any): Observable<any> {
    return throwError(error);
  }

  executeRequest(callback: any, defaultTimeout: number = 30000): Observable<any> {
    return callback.pipe(
        timeout(defaultTimeout),
        catchError(err => this.handleError(err))
    );
  }
}
