import React, { useState } from "react";

function Dark() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-[500px] mx-auto mt-[50px] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">
              {
                darkMode ? "light mode" : "dark mode"
              }
            </h1>
            <button
              className="px-4 py-2 bg-blue-500 dark:bg-green-500 text-white dark:text-gray-900 rounded transition-colors duration-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <p>
            {
              darkMode ? "light mode" : "dark mode"
            }
          </p>
        </main>
      </div>
    </div>
  );
}

export default Dark;
