import { pool } from "@/lib/db";

export async function PATCH(req, { params }) {
  const guestId = params.id;
  const { partyCode, rsvp_status, rsvp_note } = await req.json();

  if (!partyCode || !["yes", "no", "maybe"].includes(rsvp_status)) {
    return Response.json(
      { error: "partyCode and valid rsvp_status required" },
      { status: 400 }
    );
  }

  const { rows } = await pool.query(
    `
    UPDATE guests g
    SET rsvp_status = $1, rsvp_note = $2, updated_at = now()
    FROM parties p
    WHERE g.id = $3 AND g.party_id = p.id AND p.party_code = $4
    RETURNING g.id, g.first_name, g.last_name, g.rsvp_status, g.rsvp_note
    `,
    [rsvp_status, rsvp_note || null, guestId, partyCode]
  );

  if (!rows.length) {
    return Response.json(
      { error: "Guest not found or party code mismatch" },
      { status: 404 }
    );
  }

  return Response.json(rows[0]);
}
