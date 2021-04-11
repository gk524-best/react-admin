export class Storage {
  private prefix = '';

  private key;

  constructor(key: string, prefix?: string) {
    if (prefix) {
      this.prefix = prefix;
    }
    this.key = `${this.prefix}${key}`;
  }

  get() {
    const val = localStorage.getItem(this.key);
    if (val) {
      return JSON.parse(val);
    }
    return null;
  }

  set(val: any) {
    localStorage.setItem(this.key, JSON.stringify(val));
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

export const tokenStorage = new Storage('auth-info');
