import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TitleInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('TitleInterceptor');

      return next.handle(req).pipe(
        map(resp => {
          if (resp instanceof HttpResponse) {
            return  resp.clone({ body: [{title: 'Replaced data in interceptor'}] });
          }

          return resp;
        })
      );
    }
  }