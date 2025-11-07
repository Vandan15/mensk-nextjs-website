export function GET() {
  const allowCrawling = process.env.ALLOW_CRAWLING === "true";

  const content = allowCrawling
    ? `User-agent: *
Allow: /

Sitemap: https://menskconsultancy.com/sitemap.xml`
    : `User-agent: *
Disallow: /`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
