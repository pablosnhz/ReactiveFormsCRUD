import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IdInterceptor implements HttpInterceptor {

  private usedIds: Set<number> = new Set();

// si tenemos problemas con el ID es porque esta coincidion con otro que ya esta en la lista
// el problema que suele surgir es que apararece que el ID es un duplicado

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.includes('/users')) {
      const modifiedBody = { ...req.body, id: this.generateUniqueId() };
      const modifiedReq = req.clone({ body: modifiedBody });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }

  private generateUniqueId(): number {
    let newId: number;
    do {
      newId = this.getRandomId();
    } while (this.usedIds.has(newId));
    this.usedIds.add(newId);
    return newId;
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
