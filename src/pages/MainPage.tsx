import React from "react";
import {
  Slider,
  Benefits,
  Tabs,
  Card,
  Cashback,
  MobileApp,
  CalculatorCashback,
  CallUs,
  HowToGet,
  Footer,
} from "../components";
import { animateScroll } from "react-scroll";

const MainPage = () => {
  const mobileRef: any = React.useRef(null);
  const scrollToMobileRef = () => {
    animateScroll.scrollTo(mobileRef.current.offsetTop);
  };
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Зарплатная карта ",
            desc: "Моментальное зачисление Вашей заработной платы",
            img: "/img/bg.svg",
            btnText: "Открыть карту",
          }}
        />
        <Benefits title="Все преимущества в одной карте" />
        <Card />
        <Cashback />
        <CalculatorCashback />
        <HowToGet />
        <MobileApp refProp={mobileRef} />
        <Tabs scrollToMobile={scrollToMobileRef} />
        <CallUs />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
