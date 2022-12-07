import React from "react";
import style from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CTA,
  CardDeal,
  Clients,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter} `}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {
        <div className={`bg-primary ${style.flexStart}`}>
          <div className={`bg-primary ${style.boxWidth}`}>
            <Hero />
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      }
    </div>
  );
};

export default App;
