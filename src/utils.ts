import { existsSync, mkdir } from "fs";
import { Page } from "puppeteer-core";

/**
 * 创建并打开新的页面
 * @param url 页面地址
 * @returns Page
 */
async function createPage(url: string) {
  const page = await global.__BROWSER__.newPage();
  await page.goto(url);
  return page;
}

/**
 * 截图并且保存在 snapshot 文件夹下
 * @param page 页面对象
 */
async function snapshot(page: Page) {
  createDir("./snapshots");
  const date = new Date();
  const filename: string =
    date.getMonth().toString() +
    date.getDay().toString() +
    "_" +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString() +
    ".png";

  await page.screenshot({
    path: `./snapshots/${filename}`,
    fullPage: true,
  });
}

/**
 * 如果文件夹不存在则创建
 * @param dir 文件目录
 */
function createDir(dir: string) {
  if (!existsSync(dir)) {
    mkdir(dir, (err) => { });
  }
}

export { createPage, snapshot };

