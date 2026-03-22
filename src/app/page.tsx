"use client";
import { useState } from "react";

import { Contact } from "@/components/contact";
import { MacKeyboard, type KeyboardInteractionEvent, type KeyboardThemeName } from "@/components/mackeyboard";
import { ThemeChoose } from "@/components/themechoose";
import { WindowsKeyboard } from "@/components/windowskeyboard";
import { Button } from "@/components/ui/button";
import { IconBrandApple, IconBrandWindows } from "@tabler/icons-react";

export default function Page() {
  const [theme, setTheme] = useState<KeyboardThemeName>("scarlet");
  const [keyboardType, setKeyboardType] = useState<"mac" | "windows">("mac");

  return (
    <div className="flex items-center flex-col justify-center min-h-screen gap-4">
      {/* Keyboard Type Selector */}
      <div className="flex gap-2 p-2 rounded-lg">
        <Button
          type="button"
          onClick={() => setKeyboardType("mac")}
          className={`px-4 py-2 rounded-md transition-all ${
            keyboardType === "mac"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          <IconBrandApple className=" size-6 " />
        </Button>
        <Button
          type="button"
          onClick={() => setKeyboardType("windows")}
          className={`px-4 py-2 rounded-md transition-all ${
            keyboardType === "windows"
              ? "bg-black  text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          <IconBrandWindows className=" size-6 " />
        </Button>
      </div>

      {/* Conditional Keyboard Rendering */}
      {keyboardType === "mac" ? (
        <MacKeyboard
          theme={theme}
          enableHaptics
          enableSound
          onKeyEvent={(event: KeyboardInteractionEvent) => {
            console.log(event.code, event.phase, event.source);
          }}
        />
      ) : (
        <WindowsKeyboard
          theme={theme}
          enableHaptics
          enableSound
          onKeyEvent={(event: KeyboardInteractionEvent) => {
            console.log(event.code, event.phase, event.source);
          }}
        />
      )}
      
      <ThemeChoose currentTheme={theme} onThemeChange={setTheme} />
      <Contact />
    </div>
  );
}