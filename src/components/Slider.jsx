import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const slides = [
  {
    url: "https://images.shiksha.com/mediadata/images/1526988219phpgmCdfs.jpeg",
    title: "Amity Noida",
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
    url: "https://amity.edu/Kolkata/images/university.jpg",
    title: "Amity Kolkata",
  },
  {
    url: "https://www.amity.edu/dubai/images/slider-bg1.jpg",
    title: "Amity Dubai",
  },
];

export default function Slider() {
  return (
    <div className="slider">
      <MDBCarousel showControls showIndicators fade interval={3000}>
        <MDBCarouselItem itemId={1} interval={2000}>
          <img src={slides[0].url} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>{slides[0].title}</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={slides[1].url} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>{slides[1].title}</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={slides[2].url} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>{slides[2].title}</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={slides[3].url} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>{slides[3].title}</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={slides[4].url} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>{slides[4].title}</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
