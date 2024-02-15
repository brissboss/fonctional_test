export async function clickNav(page, selector) {
    await Promise.all([
        page.waitForNavigation(),
        page.click(selector),
        page.waitForNetworkIdle(),
    ]);
}

export async function testNav(page, selector, trueUrl) {
    await Promise.all([
        page.waitForNavigation(),
        page.click(selector),
        page.waitForNetworkIdle(),
    ]);

    const currentUrl = page.url();

    if (currentUrl !== trueUrl) {
        throw new Error(`[${selector}] returned ${currentUrl} instead of ${trueUrl}`);
    }
    else {
        return true;
    }

}

export function displayResult(testName, result, error = null) {
    if (result) {
        console.log(`[✅] - ${testName}: \x1b[32mPassed\x1b[37m`);
    }
    else {
        console.log(`[❌] - ${testName}: \x1b[31mFailed\x1b[37m`);
        if (error) {
            console.log("\x1b[31m   - " + error + "\x1b[37m");
        }
    }
}