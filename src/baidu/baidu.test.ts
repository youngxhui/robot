import { Page } from "puppeteer-core";
import { createPage, snapshot } from "../utils";

describe("baidu", () => {
  let page: Page;
  beforeAll(async () => {
    // wd=weibo&rsv_spt=1
    let params = new Map<string, any>();
    params.set("wd", "weibo");
    params.set("rsv_spt", 1);
    page = await createPage("https://www.baidu.com/s", params);
  });

  it('should be titled "百度一下，你就知道"', async () => {
    await snapshot(page);
    await expect(page.title()).resolves.toMatch("weibo_百度搜索");
  });
});
