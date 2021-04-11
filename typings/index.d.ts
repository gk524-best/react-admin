import { Dispatch } from 'redux';

export = App;
export as namespace App;
declare namespace App {
  interface Response {
    code: number;
    status: boolean;
    data?: number | string | Array<T> | Record<string, any> | null | undefined;
    message?: string;
  }

  interface D extends Dispatch {}
}
