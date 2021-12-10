const fs = require("fs").promises;
import { tmpdir } from "os";
import { join } from "path";

const DIR = join(tmpdir(), "jest_puppeteer_global_setup");
module.exports = async function () {
  // close the browser instance
  await global.__BROWSER_GLOBAL__.close();

  // clean-up the wsEndpoint file
  await fs.rm(DIR, { recursive: true, force: true });
};
