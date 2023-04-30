import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  body: "#fff",
  text: "#000",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

const darkTheme = {
    body: "#000",
    text: "#fff",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)",
  };
  

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div style={{ background: themeMode.gradient }}>
        <Button
          variant={theme === "dark" ? "light" : "dark"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{ float: "right", margin: "10px" }}
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
        <h1 style={{ color: themeMode.text }}>Hello World</h1>
      </div>
    </ThemeProvider>
  );
};

export default ThemeToggler;
