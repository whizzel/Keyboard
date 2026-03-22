"use client";
import { Button } from "@/components/ui/button";
import type { KeyboardThemeName } from "@/components/mackeyboard";

interface ThemeChooseProps {
  currentTheme: KeyboardThemeName;
  onThemeChange: (theme: KeyboardThemeName) => void;
}

export function ThemeChoose({ currentTheme, onThemeChange }: ThemeChooseProps) {
  return (
    <div className="mt-12 flex gap-4 flex-wrap">
      <Button 
        variant={"secondary"}
        type="button"
        onClick={() => onThemeChange("scarlet")}
        className={`px-4 py-2 rounded ${currentTheme === "scarlet" ? "bg-[#D5868A] text-white" : "bg-gray-200"}`}
      >
        Scarlet
      </Button>
      <Button 
        variant={"secondary"}
        type="button"
        onClick={() => onThemeChange("mint")}
        className={`px-4 py-2 rounded ${currentTheme === "mint" ? "bg-[#447B82] text-white" : "bg-gray-200"}`}
      >
        Mint
      </Button>
      <Button 
        variant={"secondary"}
        type="button"
        onClick={() => onThemeChange("classic")}
        className={`px-4 py-2 rounded ${currentTheme === "classic" ? "bg-[#737373] text-white" : "bg-gray-200"}`}
      >
        Classic
      </Button>
      <Button 
        variant={"secondary"}
        type="button"
        onClick={() => onThemeChange("royal")}
        className={`px-4 py-2 rounded ${currentTheme === "royal" ? "bg-[#324974] text-white" : "bg-gray-200"}`}
      >
        Royal
      </Button>
      <Button 
        variant={"secondary"}
        type="button"
        onClick={() => onThemeChange("dolch")}
        className={`px-4 py-2 rounded ${currentTheme === "dolch" ? "bg-[#e03131] text-white" : "bg-gray-200"}`}
      >
        Dolch
      </Button>
      <Button 
        variant={"secondary"}
        type="button"
        onClick={() => onThemeChange("sand")}
        className={`px-4 py-2 rounded ${currentTheme === "sand" ? "bg-[#893D36] text-white" : "bg-gray-200"}`}
      >
        Sand
      </Button>
    </div>
  );
}
