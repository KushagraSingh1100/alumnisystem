import { useEffect, useState } from "react";

const Slider = () => {
  useEffect(() => {
    setcurrIndex(0);
  }, []);
  const [currIndex, setcurrIndex] = useState(0);
  const slides = [
    {
      url: "https://images.shiksha.com/mediadata/images/1526988219phpgmCdfs.jpeg",
      title: "Noida",
    },
    {
      url: "https://www.amity.edu/lucknow/images/university.jpg",
      title: "Amity Lucknow",
    },
    {
      url: "https://www.amity.edu/jaipur/images/university.jpg",
      title: "Amity Jaipur",
    },
    {
      url: "https://www.amity.edu/dubai/images/slider-bg1.jpg",
      title: "Amity Dubai",
    },
    {
      url: "https://amity.edu/Kolkata/images/university.jpg",
      title: "Amity Kolkata",
    },
  ];
  setInterval( ()=> {
    if(currIndex===4){
      setcurrIndex(0);
    }
    else{
      setcurrIndex(currIndex+1);
    }
  }, 5000);
  const sliderStyles = {
    width: "80vw",
    height: "30vw",
    borderRadius: "1vw",
    margin: "0 auto",
    marginTop: "1vw",
    backgroundImage: `url(${slides[currIndex].url})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };
  const dotStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dots = {
    fontSize: "3vw",
    margin: "0 1vw",
    cursor: "pointer",
  }
  const gotoSlide =  (index) =>{
    setcurrIndex(index);
  }

  return (
    <div className="slide">
      <h1>Our Campuses</h1>
      <div style={sliderStyles}></div>
      <div style={dotStyles}>
        {slides.map((side, slideIndex) => (
          <div style={dots} key={slideIndex} onClick={()=>gotoSlide(slideIndex)}>
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
