import { pool } from "@/lib/db";

export async function GET(_req, { params }) {
  const code = params.code?.trim();
  const { rows } = await pool.query(
    `
    SELECT p.id as party_id, p.party_code, p.display_name,
           json_agg(json_build_object(
             'id', g.id, 'first_name', g.first_name, 'last_name', g.last_name,
             'rsvp_status', g.rsvp_status, 'rsvp_note', g.rsvp_note
           ) ORDER BY g.first_name) AS guests
    FROM parties p
    JOIN guests g ON g.party_id = p.id
    WHERE p.party_code = $1
    GROUP BY p.id
    `,
    [code]
  );
  if (!rows.length) {
    return Response.json({ error: "Party not found" }, { status: 404 });
  }
  return Response.json(rows[0]);
}
