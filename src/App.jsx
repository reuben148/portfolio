import React from "react";

import { Header, Navbar, Projects } from "./component";
import { CTA, Footer } from "./containers";

const App = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <Header />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
