#!/usr/bin/env node

/**
 * IndexNow — notify search engines about updated pages
 * Usage: npm run indexnow
 */

const SITE_URL = "https://stroemforbrug.dk";
const KEY = "stroemforbrug-dk-indexnow-key";

async function fetchSitemap() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  const text = await res.text();
  const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return urls;
}

async function submitToIndexNow(urls) {
  const body = {
    host: "stroemforbrug.dk",
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return res.status;
}

async function main() {
  console.log("Fetching sitemap...");
  const urls = await fetchSitemap();
  console.log(`Found ${urls.length} URLs`);

  console.log("Submitting to IndexNow...");
  const status = await submitToIndexNow(urls);
  console.log(`IndexNow response: ${status}`);

  if (status === 200 || status === 202) {
    console.log("Successfully submitted!");
  } else {
    console.log("Warning: unexpected status code");
  }
}

main().catch(console.error);
