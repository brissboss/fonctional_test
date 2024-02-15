export async function clickNav(page, selector) {
    await Promise.all([
        page.waitForNavigation(),
        page.click(selector),
        page.waitForNetworkIdle(),
    ]);
}

export function displayResult(testName, result, error = null) {
    if (result) {
        console.log(`${testName}: \x1b[32mPassed\x1b[37m✅ \n`);
    }
    else {
        console.log(`${testName}: \x1b[31mFailed\x1b[37m❌ \n`);
        if (error) {
            console.log(" - " + error + "\n");
        }
    }
}