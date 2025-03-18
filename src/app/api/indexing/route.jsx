import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";
import path from "path";

const KEY_FILE_PATH = path.join(process.cwd(), "private", "indexing-api-key.json");
const INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

    const auth = new GoogleAuth({
      keyFile: KEY_FILE_PATH,
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    const response = await fetch(INDEXING_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    return NextResponse.json({ message: "✅ URL Submitted Successfully", data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
