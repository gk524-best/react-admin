import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { from, Observable, of, throwError } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
import message from './message';
import { tokenStorage } from 'utils/storage';

type OptionsType = {
  getway?: string;
  headers?: object;
  noToken?: boolean;
  body?: any;
  timeout?: number;
  responseType?: string;
  showMessage?: boolean;
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

  private showMessage: boolean = true;

  constructor(
    url: string,
    method: string,
    options: OptionsType = {
      noToken: false,
      showMessage: true,
    },
  ) {
    super();
    this.method = method.toUpperCase();

    if (options.getway) {
      this.getWay = options.getway;
    } else {
      this.getWay = '/api';
    }

    // 是否显示message提示
    this.showMessage = Boolean(options.showMessage);

    // 设置Authorization
    const token = tokenStorage.get();
    if (!options.noToken && token) {
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
    const reqOptions: AjaxRequest = {
      url: this.baseUrl,
      method: this.method,
      responseType: 'json',
    };

    if (mightHaveBody(this.method)) {
      reqOptions['body'] = JSON.stringify(this.body);
    }

    if (this.headers) {
      reqOptions['headers'] = this.headers;
    }

    return ajax(reqOptions).pipe(
      map((data: AjaxResponse) => {
        const { status, response } = data;
        if (status === 200 && !response.status) {
          if (this.showMessage) {
            message.error(response.message);
          }
        }
        return response;
      }),
      catchError((error) => {
        if (error.status === 401 || error.status === 403) {
        }
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
