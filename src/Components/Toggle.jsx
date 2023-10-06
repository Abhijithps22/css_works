import React, { useState } from "react";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? "dark" : "light";
  const toggleLabel = darkMode ? "Off" : "On";

  return (
    <div className={`app ${theme}`}>
      <h1>Dark Mode Theme</h1>
      <button className="toggle-button" onClick={handleToggle}>
        {toggleLabel}
      </button>
      <p>This is some example content.</p>
    </div>
  );
}

export default ToggleButton;
