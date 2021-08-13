import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const HeaderKey = 'headerKey';
export const HeaderValueKey = 'headerValueKey';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
   
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('HeaderInterceptor');

        let newHeaders = req.headers;

        newHeaders = newHeaders.append(
            localStorage.getItem(HeaderKey) as string, 
            localStorage.getItem(HeaderValueKey) as string
        );

        const newReq = req.clone({headers: newHeaders});
        
        console.log(newReq);

        return next.handle(newReq);
    }

}