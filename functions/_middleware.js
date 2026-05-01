/**
 * Cloudflare Pages Middleware
 * Handles security headers on all responses
 */

// Security Headers Configuration
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; connect-src 'self'; worker-src 'self' blob:; child-src 'self'; frame-ancestors 'self'",
};

export async function onRequest(context) {
  try {
    const request = context.request;
    const url = new URL(request.url);
    const host = url.hostname;
    
    // Redirect from newmindmadiun.my.id to www.newmindmadiun.my.id
    if (host === 'newmindmadiun.my.id') {
      const redirectUrl = new URL(request.url);
      redirectUrl.hostname = 'www.newmindmadiun.my.id';
      return Response.redirect(redirectUrl.toString(), 301); // 301 = permanent redirect
    }
    
    // Get the response from the static file
    const response = await context.next();
    
    // Clone the response so we can add headers
    const newResponse = new Response(response.body, response);
    
    // Add all security headers to the response
    Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
      newResponse.headers.set(key, value);
    });
    
    return newResponse;
  } catch (error) {
    console.error('Middleware error:', error);
    // Return something even if there's an error
    return new Response('Error', { status: 500 });
  }
}



