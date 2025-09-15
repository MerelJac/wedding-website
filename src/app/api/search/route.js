// app/api/search/route.js
import { pool } from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();
  if (!q) return Response.json({ error: "q required" }, { status: 400 });

  const { rows } = await pool.query(
    `
    SELECT 
      p.id AS party_id,
      p.party_code,
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
    WHERE p.id IN (
      SELECT party_id
      FROM guests
      WHERE LOWER(first_name) = $1 OR LOWER(last_name) = $1
    )
    GROUP BY p.id
    LIMIT 10
    `,
    [q]
  );

  return Response.json(rows);
}
