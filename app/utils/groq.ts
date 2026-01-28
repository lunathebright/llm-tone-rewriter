import { TONE } from "../constants/rewriter";

export function getToneDescription(tone: TONE) {
  switch (tone) {
    case "polite":
      return `
Use polite and formal language.
Write in honorific and respectful expressions.
Do not add explanations, greetings, or guidance.
Keep the sentence concise and professional.
`;

    case "casual":
      return `
Use casual, conversational language.
Write as if messaging a close friend.
Avoid formal or stiff expressions.
Keep it natural and relaxed.
`;

    case "MZ Gen":
      return `
Use MZ generation Korean slang and casual expressions.
Sound trendy, light, and internet-native.
Keep it short and punchy.
Do not use honorifics.
Avoid emojis.
Write one natural sentence.
`;

    default:
      return `
Write in a natural and neutral tone.
`;
  }
}

export function createPrompt(text: string, tone: TONE) {
  return `
You are a sentence rewriting engine.

Rules:
- Output ONLY the rewritten sentence.
- Do NOT explain.
- Do NOT add examples.
- Do NOT add multiple options.
- One sentence only.
- Output the result in the SAME language as the input.

Tone: ${getToneDescription(tone)}

Input:
${text}

Output:
`;
}
