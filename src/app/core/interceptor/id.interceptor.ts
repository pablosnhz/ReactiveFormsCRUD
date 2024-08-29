import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IdInterceptor implements HttpInterceptor {

  private currentId = 1;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.includes('/users')) {
      const modifiedBody = { ...req.body, id: this.generateId() };
      const modifiedReq = req.clone({ body: modifiedBody });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }

  private generateId(): number {
    return this.currentId++;
  }
}
