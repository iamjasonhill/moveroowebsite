export const prerender = true;

export function GET() {
  return new Response(null, {
    status: 308,
    headers: {
      Location: '/sitemap-index.xml'
    }
  });
}
