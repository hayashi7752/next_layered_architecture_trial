import { ApiClient } from "../../infrastructure/api";

export class userRepository {
  private readonly _api: ApiClient;

  constructor(api: ApiClient) {
    this._api = api;
  }

  signin(email, password) {
    return this._api.get("/signin", { email, password });
  }
}
