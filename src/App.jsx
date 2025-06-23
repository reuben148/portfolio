import React from "react";

import { Header, Navbar, Projects } from "./component";
import { CTA, Footer } from "./containers";

const App = () => {
  return (
    <div className="bg-[#5a5eec]">
      <Navbar />
      <Header />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
