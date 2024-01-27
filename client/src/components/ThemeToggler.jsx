import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggler = () => {
  useEffect(() => {
    if (!theme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center">
      <input
        type="radio"
        id="switch"
        name="switch"
        className="hidden opacity-0 absolute"
        checked={theme}
        onChange={toggleTheme}
      />
      <label
        htmlFor="switch"
        className="flex items-center cursor-pointer select-none"
      >
        <div
          className={`w-10 h-4 flex items-center justify-between p-1 mx-2 transition duration-300 ${
            theme === "dark" ? "bg-blue-500" : "bg-gray-300"
          } rounded-full`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
              theme === "dark" ? "translate-x-full" : "-translate-x-1"
            }`}
          ></div>
        </div>
        <div
          className={`w-20 flex items-center ${
            theme === "dark" ? "text-blue-500" : "text-gray-600"
          }`}
        >
          <span>{theme}</span>
          {theme === "light" ? (
            <SunIcon className="ms-0.5 max-w-6" />
          ) : (
            <MoonIcon className="ms-0.5 max-w-5" />
          )}
        </div>
      </label>
    </div>
  );
};

export default ThemeToggler;
