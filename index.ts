import { chromium } from "playwright-core";

let sessionId: string;

async function createSession() {
  const response = await fetch(`https://www.browserbase.com/v1/sessions`, {
    method: "POST",
    headers: {
      'x-bb-api-key': `${process.env.BROWSERBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectId: process.env.BROWSERBASE_PROJECT_ID,
    }),
  });
  const json = await response.json();
  return json;
}

async function retrieveDebugConnectionURL(sessionId: string) {
  const response = await fetch(
    `https://www.browserbase.com/v1/sessions/${sessionId}/debug`,
    {
      method: "GET",
      headers: {
        'x-bb-api-key': `${process.env.BROWSERBASE_API_KEY}`,
      },
    },
  );
  const json = await response.json();
  return json.debuggerFullscreenUrl;
}

(async () => {
  const { id } = await createSession();
  sessionId = id;

  console.log("Starting remote browser...")
  const browser = await chromium.connectOverCDP(
    // we connect to a Session created via the API
    `wss://connect.browserbase.com?apiKey=${process.env.BROWSERBASE_API_KEY}&sessionId=${sessionId}`,
  );
  const defaultContext = browser.contexts()[0];
  const page = defaultContext.pages()[0];

  await page.goto("https://www.browserbase.com", {
    // let's make sure the page is fully loaded before asking for the live debug URL
    waitUntil: "domcontentloaded",
  });

  const debugUrl = await retrieveDebugConnectionURL(sessionId);
  console.log(`Session started, live debug accessible here: ${debugUrl}.`);

  console.log("Taking a screenshot!")
  await page.screenshot({ fullPage: true })

  console.log("Shutting down...")
  await page.close();
  await browser.close();
})().catch((error) => {
  console.log(
    `Session failed, replay is accessible here: https://www.browserbase.com/sessions/${sessionId}.`,
  );
  console.error(error.message);
});