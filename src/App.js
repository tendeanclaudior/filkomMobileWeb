import React from "react";
import Home from "./Components/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init({
    delay: 0,
    duration: 1000,
    once: true,
  });

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
