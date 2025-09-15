import { pool } from "@/lib/db";

export async function PATCH(req, { params }) {
  const { code } = params;
  const { guests } = await req.json();

  if (!Array.isArray(guests)) {
    return Response.json({ error: "guests array required" }, { status: 400 });
  }

  try {
    const results = [];
    for (const g of guests) {
      if (!["yes", "no", "maybe"].includes(g.rsvp_status)) continue;

      const { rows } = await pool.query(
        `
        UPDATE guests
        SET rsvp_status = $1, rsvp_note = $2, updated_at = now()
        WHERE id = $3
          AND party_id = (SELECT id FROM parties WHERE party_code = $4)
        RETURNING id, first_name, last_name, rsvp_status, rsvp_note
        `,
        [g.rsvp_status, g.rsvp_note || null, g.id, code]
      );

      if (rows[0]) results.push(rows[0]);
    }
    return Response.json({ updated: results.length, guests: results });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
