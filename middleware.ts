import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getValidSubdomain } from './app/helpers/getValidSubdomain';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

/**
 * Rewrites the URL if a subdomain is present. If the subdomain is found, it
 * prepends the subdomain to the path. If the subdomain is not found, the
 * request is passed through as is. This works for both HTTP and HTTPS
 * requests.
 *
 * @param {{}} req - The request object.
 * @returns {NextResponse} - The response object, or a redirect to the
 * rewritten URL.
 */
export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);
  if (subdomain) {
    // Subdomain available, rewriting
    console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}