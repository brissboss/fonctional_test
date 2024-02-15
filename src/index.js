import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

import { testNewProject } from './test/newProject.js';
import { navLinksTest } from './test/navLink.js';

dotenv.config();

async function executeTest(url, page) {
    await navLinksTest(process.env.WEBSITE_URL, page);
    await testNewProject(process.env.WEBSITE_URL, page);
}

(async () => {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROMIUM_PATH,
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });
    const page = await browser.newPage();

    console.log("\x1b[37m🚀 Test started 🚀\n\n");

    await executeTest(process.env.WEBSITE_URL, page);

    console.log("\n\n🎉 Test finished 🎉\n\n");

    await browser.close();
})();
