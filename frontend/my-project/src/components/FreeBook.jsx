import React from "react";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
const FreeBook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  const filterdata = list.filter((data) => data.category === "free");

  return <>
 <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-5 mb-5" >
 <div >
    <h1 className="text-2xl font-bold text-purple-700">Free Available Books</h1>
    <p>All of these books are available for free download, so you can enjoy reading without any cost!</p>
  </div>
  <div >
  <Slider {...settings} className="justify-center">
        {filterdata.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
      </Slider>
  </div>
 </div>
  </>
};

export default FreeBook