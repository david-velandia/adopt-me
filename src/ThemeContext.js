import { createContext } from "react";

const ThemeContext = createContext(["green", function noop() {}]);

export default ThemeContext;
