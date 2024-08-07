import React from "react";
import "./App.css";
import Hero from "./componets/Hero/Hero";
import Header from "./componets/Header/Header";
// import Onwe from "./componets/WhatIsOnwe/Onwe";
import Onwe from "./componets/WhatIsOnwe/WhatisOnwe";
import Clubs from "./componets/clubs/Clubs";
import Crew from "./componets/Crew/Crew";
import Events from "./componets/Events/Events";
import Updates from "./componets/Updates/Updates";

import InfiniteScrollComponent from "./componets/WhatIsOnwe/HorizontalScroll";
import Anime from "./componets/Hero/Anime";
import NewHero from "./componets/NewHero";
import Footer from "./componets/Footer/Footer";
import CrewCarousel from "./componets/Crew/CrewCorousel/CrewCorousel";

const App = () => {
  return (
    <div className="black-border">
      {/* <Header /> */}
      {/* <Anime/> */}
      {/* <NewHero /> */}
      <Hero />
      <Onwe />
      {/* <InfiniteScrollComponent /> */}
      <Clubs />
      <Events />
      <Crew />

      <Updates />
      <Footer />
    </div>
  );
};
export default App;
