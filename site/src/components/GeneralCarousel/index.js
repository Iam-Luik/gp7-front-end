
import { Carousel } from "react-carousel-minimal";

function GeneralCarousel({ data, ref }) {
  

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <>
      <Carousel
            ref={ref}
            data={data}
            time={2000}
            width="550px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "550px",
              maxHeight: "550px",
              margin: "10px auto",
            }}
          />
    </>
  );
}

export default GeneralCarousel;
