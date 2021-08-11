import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
   
    // We inject our LoginService
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('TokenInterceptor');

        let token = 'token';
        let newHeaders = req.headers;

        newHeaders = newHeaders.append('authtoken', token);
        const authReq = req.clone({headers: newHeaders});
        
        return next.handle(authReq);
    }

}