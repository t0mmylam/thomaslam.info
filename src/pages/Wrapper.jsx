import React, { useState } from "react";
import Particles from "../components/Particles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Wrapper() {
  const [accentColor, setAccentColor] = useState("#7fffd4");

  const switchColor = () => {
    const colors = ["#7FFFD4", "#FF7F7F", "#7FE0FF", "#80FF7F", "#A57FFF"];
    setAccentColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div style={{ "--accent": accentColor }}>
      <Particles color={accentColor} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer switchColor={switchColor} />
    </div>
  );
}

export default Wrapper;
