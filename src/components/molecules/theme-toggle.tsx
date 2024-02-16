"use client";
import React from "react";
import Icon from "@/components/atoms/icon";

const [light, dark] = ["winter", "night"];

function ThemeToggle() {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  React.useEffect(() => {
    if (window && window.matchMedia("(prefers-color-scheme: dark)")) {
      setTheme(dark);
    }
  }, []);

  React.useEffect(() => {
    if (document) {
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <label className="swap swap-rotate absolute top-3 right-3 text-primary">
      <input type="checkbox" onClick={() => toggleTheme()} />
      <Icon name="sun" className="swap-on w-8 h-8" />
      <Icon name="moon" className="swap-off w-8 h-8" />
    </label>
  );
}

export default ThemeToggle;
