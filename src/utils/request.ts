import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import message from './message';
import { tokenStorage } from 'utils/storage';

type OptionsType = {
  getway?: string;
  headers?: object;
  noToken?: boolean;
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

  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  constructor(url: string, method: string, options: OptionsType) {
    super();
    this.method = method.toUpperCase();

    if (options.getway) {
      this.getWay = options.getway;
    } else {
      this.getWay = '/api';
    }

    const token = tokenStorage.get();
    if (options.noToken && token) {
      this.headers['Authorization'] = token.access_token;
    }

    if (process.env.NODE_ENV === 'development') {
      this.baseUrl = this.getWay + url;
    } else {
      this.baseUrl = process.env.APP_BASE_URL + this.getWay + url;
    }

    if (mightHaveBody(this.method)) {
      this.body = options.body ?? null;
    }

    if (options.headers !== undefined) {
      this.headers = {
        ...this.headers,
        ...options.headers,
      };
    }
  }

  create() {
    const ajaxOptions: AjaxRequest = {
      url: this.baseUrl,
      method: this.method,
      responseType: 'json',
    };

    if (mightHaveBody(this.method)) {
      ajaxOptions['body'] = JSON.stringify(this.body);
    }

    if (this.headers) {
      ajaxOptions['headers'] = this.headers;
    }

    // console.log(
    //   '===========================request options===============================',
    // );
    // console.log(ajaxOptions);

    return ajax(ajaxOptions).pipe(
      map((data: AjaxResponse) => {
        console.log('===========response===========', data);
        const status = data.status;
        // stataus 状态判断
        if (status === 200) {
          const res = data.response;
          if (res.code !== 0) {
            message.error(res.message);
          }
          return data.response;
        }
      }),
      catchError((error) => {
        console.log(error);
        message.error(error);
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
