import axios from "axios";

const baseDomain = "https://reqres.in";
const baseURL = `${baseDomain}/api`;
const client = axios.create({ baseURL });

export class driver {
  baseurl;

  constructor() {
    this.baseurl = baseURL;
  }

  get<T>(resouce: string, params) {
    const url = `${this.baseurl}/${resouce}`;
    return client.get<T>(url, params);
  }

  post<T>(resouce: string, req) {
    const url = `${this.baseurl}/${resouce}`;
    return client.post<T>(url, req);
  }
}
