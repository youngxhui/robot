import { Page } from "puppeteer-core";

/**
 * 这仅仅是测试
 */
 class RobotPage {
    page: Page;
    private constructor() {
      this.page = global.__BROWSER__.newPage();
    }
  
    public async setCookies(params: []) {
      // 设置 cookies
      await this.page.setCookie();
    }
  
    /**
     * 创建并打开新的页面
     * @param url 页面地址
     * @returns Page
     */
    async createPage(
      url: string,
      params: Map<string, any> = null
    ): Promise<Page> {
      this.page = await global.__BROWSER__.newPage();
  
      if (params != null) {
        url = url + "?";
        params.forEach((value, key) => {
          url += `&${key}=${value}`;
        });
      }
      await this.page.goto(url);
      return this.page;
    }
  }