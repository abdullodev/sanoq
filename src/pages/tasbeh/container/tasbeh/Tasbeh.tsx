import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TasbehStyled } from "./Tasbeh.style";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import tasbeh2 from "../../assets/tasbeh2.png";
import tasbeh1 from "../../assets/tasbeh1.png";
import tasbeh3 from "../../assets/tasbeh3.png";
import tasbeh4 from "../../assets/tasbeh4.png";

const Tasbeh = () => {
  const [actionValue, setActionValue] = useState<number>(33);
  const [counterValue, setCounterValue] = useState<number>(0);
  const [allCount, setAllCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
  };

  const handleCounter = () => {
    setAllCount((prev) => prev + 1);
    setCounterValue((prev) => prev + 1);
  };

  const handleDefault = () => {
    setCounterValue(0);
    setAllCount(0);
  };

  useEffect(() => {
    if (actionValue === 33 && counterValue > 33) {
      let newCount = counterValue - actionValue;
      setCounterValue(newCount);
    }
    if (actionValue === 33) {
      if (counterValue === 34) {
        setCounterValue(1);
      }
    }
    if (actionValue === 99) {
      if (counterValue === 100) {
        setCounterValue(1);
      }
    }
  }, [actionValue, counterValue]);

  const handleSelectType = () => {
    setIsTrue(!isTrue);
    if (isTrue) {
      setActionValue(33);
    } else {
      setActionValue(99);
    }
  };
  return (
    <TasbehStyled>
      <header>
        <div className="title">Zikir sanog'i</div>
        <div className="header_action">
          <IconButton className="action_count" onClick={handleSelectType}>
            {counterValue}/{actionValue}
          </IconButton>
          <div className="action_default">
            <IconButton className="action_default_btn" onClick={handleDefault}>
              <RefreshIcon className="action_icon" />
            </IconButton>
          </div>
        </div>
      </header>
      <div className="counter-box">
        <div className="counter-right">
          <div className="slide_content">
            <Slider {...settings} className="my_slick_slider">
              <div className="slide_box">
                <img src={tasbeh2} alt="tasbeh" />
              </div>
              <div className="slide_box">
                <img src={tasbeh1} alt="tasbeh" />
              </div>
              <div className="slide_box">
                <img src={tasbeh3} alt="tasbeh" />
              </div>
              <div className="slide_box">
                <img src={tasbeh4} alt="tasbeh" />
              </div>
            </Slider>
          </div>
          <div className="all_count">{allCount}</div>
        </div>
        <div className="counter-left">
          <IconButton className="action_default" onClick={handleCounter}>
            {counterValue}
          </IconButton>
        </div>
      </div>
    </TasbehStyled>
  );
};

export default Tasbeh;
