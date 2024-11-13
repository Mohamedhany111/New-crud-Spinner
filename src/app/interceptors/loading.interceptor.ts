import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { ListService } from '../Services/list.service';
import { delay, finalize, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from '../Services/spinner.service';

export const loadingInterceptor: HttpInterceptorFn = (req:HttpRequest<any>, next) => {
const busyService = inject(SpinnerService);
busyService.busy();
  return next(req).pipe(
    delay(2000),
    finalize(()=>busyService.idle())
  )
};
