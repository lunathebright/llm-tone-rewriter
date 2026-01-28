import { createPrompt } from "@/app/utils/groq";
import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { text, tone } = await req.json();

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: createPrompt(text, tone),
      },
    ],
  });

  const result = completion.choices[0].message.content;

  return NextResponse.json({ result });
}
