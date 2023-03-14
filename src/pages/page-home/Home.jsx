import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";

import IntroHeader from "./home-intro-header/Intro-header";
import Section1 from "./home-section1/Section1";
import Section2 from "./home-section2/Section2";
import Section3 from "./home-section3/Section3";

gsap.registerPlugin(ScrollTrigger);

const slide = (elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: delay || 0.6,
      duration: duration || 0.6,
      scrollTrigger: {
        trigger: elem,
      },
    }
  );
};

function Home({ dataProduct }) {
  useEffect(() => {
    slide("#aboutHome", "2", "1");
    slide("#categories_home", ".5", "1");
  }, []);

  return (
    <>
      <IntroHeader slide={slide} dataProduct={dataProduct} />
      <main className="main-home">
        <div id="categories_home">
          <Categories />
        </div>
        <Section1 slide={slide} />
        <Section2 slide={slide} />
        <Section3 slide={slide} />
        <div id="aboutHome">
          <About slide={slide} />
        </div>
      </main>
    </>
  );
}

export default Home;
