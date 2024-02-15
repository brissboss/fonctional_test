import { testNav, displayResult } from "../utils/utils.js";

export async function navLinksTest(url, page) {
    try {
        const test = await page.goto(url, { waitUntil: 'networkidle0' });

        if (test.status() !== 200) {
            throw new Error("The page is not available");
        }

        await testNav(page, '#nav-your-projects', url + 'projects');
        await testNav(page, '#nav-new-project', url + 'projects/new');
        await testNav(page, '#nav-your-customers', url + 'customers');
        await testNav(page, '#nav-dashboard', url + 'dashboard');

        displayResult("Navigation Links Test", true);
    }
    catch (error) {
        displayResult("Navigation Links Test", false, error.message);
    }
}