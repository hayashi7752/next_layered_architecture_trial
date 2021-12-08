// driverを用いて実際にAPI requestを行う
// responseをdomainに合わせた形にデータ整形
import { driver } from "../../infrastructure/driver";

export class userRepository {
  private readonly _driver: driver;

  constructor(api: driver) {
    this._driver = api;
  }

  signin(email, password): Promise<any> {
    return this._driver
      .get("/signin", { email, password })
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  }

  async getUserList(email, password): Promise<Object> {
    const user = await this._driver
      .get("/signin", { email, password })
      .then(() => {
        return ["hoge", "fuga", "piyo"];
      })
      .catch((e) => {
        console.error(e);
      });

    // 取得したresponseをデータ整形
    if (user) {
      return user.map((str) => {
        return {
          name: str,
        };
      });
    }
  }
}
