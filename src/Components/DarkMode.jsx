import React, { useState } from "react";
import "./Darkmode.css";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>Toggle Dark and White Theme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DarkMode;
