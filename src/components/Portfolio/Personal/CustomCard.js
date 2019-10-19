import React from "react";

import Slider from "react-slick";

class CustomCard extends React.Component {
  renderSlides() {
    const { images } = this.props;
    return images.map((img, i) => {
      return (
        <div key={i}>
          <img className="w-100" src={img} alt="Project" />
        </div>
      );
    });
  }
  render() {
    const { title, d1, d2, d3, link } = this.props;
    const settings = {
      infinite: true,
      autoplay: true,
      arrows:false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="row align-items-center justify-content-center p-3">
        <div className="col-md-6 col-12 text-center ">
          <strong className="h6"><b>{title}</b></strong>
          <ul className="list-group text-left mt-3">
            <li>{d1}</li>
            <li>{d2}</li>
            <li>{d3}</li>
          </ul>
          
          {link ? (
            <a className="btn btn-primary text-white mt-4" href={link}>
              View on Expo
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className="col-md-6 col-10">
          <Slider {...settings}>{this.renderSlides()}</Slider>
        </div>
      </div>
    );
  }
}

export default CustomCard;
