import { clickNav, displayResult } from "../utils/utils.js";

export async function testNewProject(url, page) {
    try {
        const test = await page.goto(url + 'projects/new', { waitUntil: 'networkidle0' });

        if (test.status() !== 200) {
            throw new Error("The page is not available");
        }

        const projectName = Math.random().toString(36).substring(7);

        await page.type('#project-name', projectName);
        await page.type('#token-price', "100");
        await page.type('#token-supply', "1000");
        await page.type('#token-symbol', projectName);
        await page.type('#token-max', "10000");

        await clickNav(page, '#create-project');

        displayResult("Create New Project", true);
    }
    catch (error) {
        displayResult("Create New Project", false, error.message);
    }
}
