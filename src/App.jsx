import React from "react";
import { Header, Navbar, About, Experience,Portfolio,Footer, Contact } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
