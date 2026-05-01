/**
 * Cloudflare Worker for MieNewMind Site Status Management
 * Server-side routing for maintenance mode across all devices
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Allow admin panel and coming-soon page always
    if (pathname === '/admin-toggle.html' || pathname === '/coming-soon.html') {
      return env.ASSETS.fetch(request);
    }

    // API endpoint for status management
    if (pathname === '/api/status') {
      return handleStatusAPI(request, env);
    }

    // Check maintenance status for all other pages
    const status = await env.SITE_STATUS.get('status');
    const expiresAt = await env.SITE_STATUS.get('expiresAt');

    // If offline, check expiration
    if (status === 'offline') {
      if (expiresAt && new Date(expiresAt) < new Date()) {
        // Auto-expire: delete and serve normal page
        await env.SITE_STATUS.delete('status');
        await env.SITE_STATUS.delete('expiresAt');
      } else {
        // Still offline - redirect to coming-soon
        return new Response(null, {
          status: 307,
          headers: { Location: '/coming-soon.html' }
        });
      }
    }

    // Serve normal pages
    return env.ASSETS.fetch(request);
  }
};

async function handleStatusAPI(request, env) {
  const { pathname, searchParams } = new URL(request.url);

  // GET: Retrieve current status
  if (request.method === 'GET') {
    const status = await env.SITE_STATUS.get('status');
    const expiresAt = await env.SITE_STATUS.get('expiresAt');

    // Check if offline status has expired
    if (status === 'offline' && expiresAt) {
      if (new Date(expiresAt) < new Date()) {
        // Auto-expire
        await env.SITE_STATUS.delete('status');
        await env.SITE_STATUS.delete('expiresAt');
        return new Response(JSON.stringify({ status: 'online' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response(JSON.stringify({
      status: status || 'online',
      expiresAt: expiresAt || null
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // POST: Set status
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const { status, duration } = body;

      if (status === 'offline') {
        const durationHours = duration || 24;
        const expiresAt = new Date(Date.now() + (durationHours * 60 * 60 * 1000));

        await env.SITE_STATUS.put('status', 'offline');
        await env.SITE_STATUS.put('expiresAt', expiresAt.toISOString());

        return new Response(JSON.stringify({
          status: 'offline',
          expiresAt: expiresAt.toISOString(),
          message: `🚫 Maintenance mode enabled for ${durationHours} hours - ALL devices will see coming-soon page`
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } else if (status === 'online') {
        await env.SITE_STATUS.delete('status');
        await env.SITE_STATUS.delete('expiresAt');

        return new Response(JSON.stringify({
          status: 'online',
          message: '✅ Site is back ONLINE on all devices'
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return new Response('Not Found', { status: 404 });
}
