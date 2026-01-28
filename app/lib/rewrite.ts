import { TONE } from "../constants/rewriter";

export async function rewriteText(text: string, tone: TONE) {
  const res = await fetch("/api/rewrite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, tone }),
  });

  if (!res.ok) {
    throw new Error("Failed to rewrite text");
  }

  const data = await res.json();
  return data.result as string;
}
