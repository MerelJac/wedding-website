// lib/middleware.js
export function requireAdmin(req, res, next) {
  const key = req.headers.get("x-admin-key");
  if (key !== process.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
    });
  }
  return next();
}
