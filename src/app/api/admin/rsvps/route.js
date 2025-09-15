import { pool } from "@/lib/db";
import { requireAdmin } from "@/lib/middleware";

export async function GET(req) {
  const unauthorized = requireAdmin(req);
  if (unauthorized) return unauthorized;

  try {
    const { rows } = await pool.query(`
      SELECT 
        p.id AS party_id,
        p.display_name,
        json_agg(
          json_build_object(
            'id', g.id,
            'first_name', g.first_name,
            'last_name', g.last_name,
            'rsvp_status', g.rsvp_status,
            'rsvp_note', g.rsvp_note
          ) ORDER BY g.first_name
        ) AS guests
      FROM parties p
      JOIN guests g ON g.party_id = p.id
      GROUP BY p.id
      ORDER BY p.display_name
    `);

    return Response.json(rows);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
