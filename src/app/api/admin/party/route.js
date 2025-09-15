import { pool } from "@/lib/db";
import { requireAdmin } from "@/lib/middleware";

export async function POST(req) {
  const unauthorized = requireAdmin(req);
  if (unauthorized) return unauthorized;

  const { display_name, guests } = await req.json();
  if (!display_name || !Array.isArray(guests) || !guests.length) {
    return Response.json(
      { error: "display_name and guests required" },
      { status: 400 }
    );
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO parties (display_name, party_code)
      VALUES ($1, encode(md5(random()::text || clock_timestamp()::text)::bytea, 'hex'))
      RETURNING id, party_code`,
      [display_name]
    );
    const partyId = rows[0].id;

    for (const g of guests) {
      await pool.query(
        `INSERT INTO guests (party_id, first_name, last_name)
         VALUES ($1, $2, $3)`,
        [partyId, g.first_name, g.last_name]
      );
    }

    return Response.json({ ok: true, party: rows[0] });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
