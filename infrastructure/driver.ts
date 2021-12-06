import axios from "axios";

const baseDomain = "https://reqres.in";
const baseURL = `${baseDomain}/api`;
const client = axios.create({ baseURL });

type Hoge = {
  hoge: string;
  fuga: string;
  piyo: string;
};
export class driver {
  baseurl;

  constructor() {
    this.baseurl = baseURL;
  }

  get(resouce: string, params) {
    const url = `${this.baseurl}/${resouce}`;
    return client.get<Hoge>(url, params);
  }

  post<T>(resouce: string, req) {
    const url = `${this.baseurl}/${resouce}`;
    return client.post<T>(url, req);
  }
}
