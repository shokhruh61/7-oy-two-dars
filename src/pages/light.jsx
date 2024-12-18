import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function Light({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme((prev) => (prev == "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                className={`min-h-screen ${theme == "light" ? "bg-white text-black" : "bg-black text-white"
                    }`}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export default Light;