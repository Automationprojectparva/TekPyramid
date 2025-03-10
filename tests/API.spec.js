import { test, expect  } from "@playwright/test";

// const { chromium } = require('playwright');
const axios = require('axios'); // Import axios for making API calls

test.skip('API request',async ({browser}) => {
  // Launch browser and create a new context
//   const browser = await chromium.launch();
  const context=await browser.newContext()
  const page = await context.newPage()

  // Example: Fetch data from an API
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const response = await axios.get(apiUrl);
  const data = response.data;

  console.log('API Response:', data); // Log API response for debugging

  // Open a webpage to interact with
  await page.goto('https://example.com');

  // Example: Populate a form based on API data
  await page.fill('input[name="title"]', data[0].title);  // Populate form input

  // Submit form or interact further
  await page.click('button[type="submit"]');

  // Take a screenshot for validation
  await page.screenshot({ path: 'screenshot.png' });

  // Close browser
  await browser.close();

})();






