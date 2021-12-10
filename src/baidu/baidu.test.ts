import { createPage, snapshot } from "../utils";

describe("baidu", () => {
  let page;
  beforeAll(async () => {
    page = await createPage("https://www.baidu.com");
  });

  it('should be titled "百度一下，你就知道"', async () => {
    snapshot(page);
    await expect(page.title()).resolves.toMatch("百度一下，你就知道");
  });
});
