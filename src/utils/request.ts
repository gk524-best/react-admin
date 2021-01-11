import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

type OptionsType = {
  getway?: string;
  headers?: object;
  body?: any;
  timeout?: number;
  responseType?: string;
};

function mightHaveBody(method: string): boolean {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;
    default:
      return true;
  }
}

export class Request<T> extends Observable<T> {
  private method: string;

  private getWay: string;

  private baseUrl: string;

  private body: T | null = null;

  private headers: object | undefined = undefined;

  constructor(url: string, method: string, options: OptionsType) {
    super();
    this.method = method.toUpperCase();

    if (options.getway) {
      this.getWay = options.getway;
    } else {
      this.getWay = '/api';
    }

    this.baseUrl = process.env.APP_BASE_URL + this.getWay + url;

    if (mightHaveBody(this.method)) {
      this.body = options.body ?? null;
    }

    if (options.headers !== undefined) {
      this.headers = options.headers;
    }
  }

  create() {
    const ajaxOptions: AjaxRequest = {
      url: this.baseUrl,
      method: this.method,
    };

    if (mightHaveBody(this.method)) {
      ajaxOptions['body'] = this.body;
    }

    if (this.headers) {
      ajaxOptions['headers'] = JSON.stringify(this.headers);
    }

    return ajax(ajaxOptions).pipe(
      map((response) => console.log('response', response)),
      catchError((error) => {
        console.log('error', error);
        return of(error);
      }),
    );
  }
}

export const get = (url: string, options: OptionsType) => {
  return new Request(url, 'GET', options).create();
};

export const post = (url: string, options: OptionsType) => {
  return new Request(url, 'POST', options).create();
};

export const put = (url: string, options: OptionsType) => {
  return new Request(url, 'PUT', options).create();
};

export const del = (url: string, options: OptionsType) => {
  return new Request(url, 'DELETE', options).create();
};
