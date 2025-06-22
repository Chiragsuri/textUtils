import React, { useState, useEffect } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // Default theme is dark
  const [mode, setMode] = useState("dark");

  // State to show alerts
  const [alert, setAlert] = useState(null);

  // Apply initial background color on first render or mode change
  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#042743" : "white";
  }, [mode]);

  // Show alert message with type
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle between dark and light modes
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3" mode={mode}>
        {/* <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route
          exact
          path="/"
          element={ */}
        <p
          style={{
            textAlign: "justify",
            fontSize: "3rem",
            marginBottom: "2rem",
            color: mode === "dark" ? "white" : "#042743",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          This is a project made by{" "}
          <a
            href="https://chiragsuri.github.io"
            rel="noopener noreferrer"
            style={{
              color: mode === "dark" ? "white" : "#042743",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Chirag Suri
          </a>
          , which helps in text editing.
        </p>
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* } /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
