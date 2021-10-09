import puppeteer from "puppeteer";
import { PanoptoInfo } from "./types";

function isToken(credentials: PanoptoInfo["credentials"]): credentials is { token: string } {
  return 'token' in credentials;
}

export async function authenticate(panopto: PanoptoInfo): Promise<string> {
  if (isToken(panopto.credentials)) return panopto.credentials.token;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(panopto.baseUrl);

  // Fill in form
  await page.type('#username', panopto.credentials.username);
  await page.type('#password', panopto.credentials.password);
  await page.click('input[type=submit]');

  // After we submit we need to wait a bit for the SAML magic to work... a tad hacky but it works.
  await page.waitForNavigation();
  await page.waitForTimeout(5000);

  // Return back to the page... seems like we get auth tokens properly when we are here.
  await page.goto(panopto.baseUrl);

  const cookies = await page.cookies(panopto.baseUrl);
  const token = cookies.find(x => x.name === '.ASPXAUTH')!.value;

  await browser.close();

  return token;
}
