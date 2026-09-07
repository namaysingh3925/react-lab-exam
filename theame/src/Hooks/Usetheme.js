import { useState } from "react";

function useTheme() {

    const [theme, setTheme] = useState("Light");

    const toggleTheme = () => {

        if (theme === "Light") {
            setTheme("Dark");
        } else {
            setTheme("Light");
        }

    };


    return {
        theme,
        toggleTheme
    };
}

export default useTheme;