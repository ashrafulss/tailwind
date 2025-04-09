import { HttpInterceptorFn } from '@angular/common/http';


export const authsInterceptor: HttpInterceptorFn = (req, next) => {
  
console.log('hello im interceptor')
  if (['POST', 'PUT', 'PATCH'].includes(req.method.toUpperCase())) {
    const wrappedBody = {
      header: {
        requestId: crypto.randomUUID(), 
        requestClient: 'greenlc',
        requestType: req.url, 
        requestSource: 'greenlc-portal',
        requestVersion: '1.0',
        requestTime: new Date().toISOString(),
        requestTimeoutInSeconds: 20,
        requestRetryCount: 0,
        requestSourceService: 'create'
      },
      meta: {},
      body: req.body
    };

    const modifiedReq = req.clone({ body: wrappedBody });
    return next(modifiedReq);
  }

 
  return next(req);
};