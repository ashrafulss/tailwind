import { HttpInterceptorFn } from '@angular/common/http';

export const authsInterceptor: HttpInterceptorFn = (req, next) => {

  // console.log('hello im intercepter')
  return next(req)};
