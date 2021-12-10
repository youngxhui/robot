const { mkdir, writeFile } = require("fs").promises;
import { platform, tmpdir } from "os";
import { join } from "path";
const puppeteer = require("puppeteer-core");
const { browserPath } = require("./config");
const DIR = join(tmpdir(), "jest_puppeteer_global_setup");

module.exports = async function () {
  let browser = null;
  console.log("browserPath is", browserPath);
  if (browserPath == "") {
    const plat = platform();
    if (plat === "linux") {
      browser = await puppeteer.launch({
        executablePath: "/usr/bin/chromium-browser",
      });
    } else if (plat === "darwin") {
      browser = await puppeteer.launch({
        executablePath:
          "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      });
    } else {
      browser = await puppeteer.launch({
        executablePath:
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      });
    }
  } else {
    browser = await puppeteer.launch({
      executablePath: browserPath,
    });
  }

  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser;

  // use the file system to expose the wsEndpoint for TestEnvironments
  await mkdir(DIR, { recursive: true });
  await writeFile(join(DIR, "wsEndpoint"), browser.wsEndpoint());
};
