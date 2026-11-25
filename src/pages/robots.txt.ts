/**
 * 动态生成 robots.txt，sitemap 地址跟随构建时的 site + base
 */
export function GET({ site }: { site: URL | undefined }) {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const origin = (site ?? new URL('https://resume.herongcan.icu')).toString().replace(/\/+$/, '');
  const sitemap = `${origin}${base}/sitemap-index.xml`;
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
