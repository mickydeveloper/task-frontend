import "expect-puppeteer";
//to run it make sure the localhost is running
/* tslint:disable */

describe("Task Frontend", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080/task-frontend");
  });

  it('should display "Filter by name:" text on page', async () => {
    await expect(page).toMatchTextContent("Filter by name:");
  });

  it("should create transaction", async () => {
    // Type into form boxes
    await page.type(".amount-input", "40");
    await page.type(".account-input", "400000421323232313313");
    await page.type(".beneficiary-input", "Test Person");
    await page.type(".address-input", "Somwhere, There, North Anywhere, 9000");
    await page.type(".description-input", "It was a good sale");

    const searchResultSelector = ".submit";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
    await page.waitForNetworkIdle();
    await page.waitForSelector("text/Test Person");

    // Find the search result
    const textSelector = await page.waitForSelector(".beneficiary");
    const fullTitle = await textSelector?.evaluate((el) => el.textContent);

    // Making sure our result is correct
    await expect(fullTitle).toMatch("Test Person");
  });

  it("should filter the list page", async () => {
    // Making sure the list has loaded
    await page.waitForSelector(".beneficiary");

    // Type into search box
    await page.type(".filter-input", "Test");

    // Find the search result
    const textSelector = await page.waitForSelector(".beneficiary");
    const fullTitle = await textSelector?.evaluate((el) => el.textContent);

    // Making sure our result is correct
    await expect(fullTitle).toMatch("Test Person");

    //screenshot good for debuging/visiual regression
    await page.screenshot({ path: "advanced-search-results.png" });
  });
});
