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

  it("should filter the list page", async () => {
    // Making sure the list has loaded
    await page.waitForSelector(".beneficiary");

    // Type into search box
    await page.type(".filter-input", "Ami");

    // Find the search result
    const textSelector = await page.waitForSelector(".beneficiary");
    const fullTitle = await textSelector?.evaluate((el) => el.textContent);

    // Making sure our result is correct
    await expect(fullTitle).toMatch("Amie Whitley");

    //screenshot good for debuging/visiual regression
    await page.screenshot({ path: "advanced-search-results.png" });
  });
});
