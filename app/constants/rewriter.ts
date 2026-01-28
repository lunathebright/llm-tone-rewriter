export const TONES = ["polite", "casual", "MZ Gen"] as const;
export type TONE = (typeof TONES)[number];
