// src/app/loading.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { Observable } from 'rxjs';
import { LoadingService } from './service/loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  constructor(private loadingService: LoadingService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  canActivate(): Observable<boolean> {
    return new Observable(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingService.show();
    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      setTimeout(() => {
        this.loadingService.hide();
      }, 1000); 
    }
  }
}
