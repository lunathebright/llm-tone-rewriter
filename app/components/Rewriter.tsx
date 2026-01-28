"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TONE, TONES } from "../constants/rewriter";
import { Quote } from "lucide-react";
import { useState } from "react";
import { rewriteText } from "../lib/rewrite";

export default function Rewriter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("-");

  const handleClick = async (tone: TONE) => {
    try {
      const rewritten = await rewriteText(text, tone);
      setResult(rewritten);
    } catch (e) {
      console.log(e);
    }
    // finally {}
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-12 px-2">
        <Quote className="-scale-x-100" />
        <p className="px-2">{result}</p>
        <Quote />
      </div>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-white mb-2 border-gray-400 focus:outline focus:outline-none"
        placeholder="문장을 입력하세요"
      />
      <div className="flex gap-2">
        {TONES.map((tone) => (
          <Button
            onClick={() => handleClick(tone)}
            variant="outline"
            key={tone}
          >
            {tone}
          </Button>
        ))}
      </div>
    </div>
  );
}
