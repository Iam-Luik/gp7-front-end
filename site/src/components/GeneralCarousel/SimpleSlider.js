import Slider from "react-slick";

export const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} style={{ width: '80%', height: '100%' }}>
      <div>
        <h1>teste 1</h1>
        {/* <img src={'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'} /> */}
      </div>
      <div>
      <h1>teste 2</h1>
      {/* <img src={'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'} /> */}
      </div>
      <div>
      <h1>teste 3</h1>
      {/* <img src={'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'} /> */}
      </div>
    </Slider>
  );
}