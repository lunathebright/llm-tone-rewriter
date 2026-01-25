import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TONES } from "../constants/rewriter";

export default function Rewriter() {
  return (
    <div className="w-full -translate-y-10">
      <div className="border border-orange-200 flex justify-center my-4">
        <p>asdf</p>
      </div>
      <Textarea className="bg-white mb-2" />
      <div className="flex gap-2">
        {TONES.map((tone) => (
          <Button variant="outline" key={tone}>
            {tone}
          </Button>
        ))}
      </div>
    </div>
  );
}
