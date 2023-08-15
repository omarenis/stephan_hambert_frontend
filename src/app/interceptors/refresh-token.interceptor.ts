import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';
import {catchError, Observable, Observer, Subscription} from 'rxjs';
import {SecureStorageService} from "../services/secure-storage.service";

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private secureStorage: SecureStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone();
    const observable = new Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<unknown> | HttpUserEvent<unknown> | HttpErrorResponse>((subscriber) => {
      subscriber.next = (err) => {

      }
    })
    return next.handle(request).pipe(catchError((err: any, caught: Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<unknown> | HttpUserEvent<unknown>>) => observable);
  }
}
