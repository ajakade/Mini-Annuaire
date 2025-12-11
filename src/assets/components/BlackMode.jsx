import { useState, useEffect } from "react";

function BlackMode() {
  const [darkMode, setDarkMode] = useState(false);

  // Quand darkMode change → on ajoute/enlève la classe sur le body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>
    </div>
  );
}

export default BlackMode;
