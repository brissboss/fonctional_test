import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import ora from 'ora';
import { testNewProject } from './test/newProject.js';

dotenv.config();

async function executeTest(url, page) {
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

    const spinner = ora('🚀 Test started 🚀\n\n').start();

    try {
        await executeTest(process.env.WEBSITE_URL, page);
        console.log('\n\n');
        spinner.succeed('Test finished');
    }
    catch (error) {
        spinner.fail('Failed to load page');
    }

    await browser.close();
})();
