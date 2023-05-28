import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleHover = (hoverState) => {
    this.setState({ isHovered: hoverState });
  };

  render() {
    const { isHovered } = this.state;

    const unis = [
      {
        id: 1,
        image: 'https://img.freepik.com/free-photo/rack-clothes-store_23-2148929537.jpg?w=826&t=st=1685207888~exp=1685208488~hmac=1ed540a5c7ad7440f84d78412aad0cb82a2085fc383fe5590067f8f5b1c138dc',
      },
      {
        id: 2,
        image: 'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=826&t=st=1685207923~exp=1685208523~hmac=30a13e3e5beb81d9f2875de24eb0994133218fa2192e475c8004cac8f942eea7',
      },
      {
        id: 3,
        image: 'https://img.freepik.com/free-photo/adult-smiley-women-shopping-together_23-2148385705.jpg?w=826&t=st=1685207996~exp=1685208596~hmac=5cd5dad5915a11227c9b846bab4a5db811a7cd825d3a58300073cdd61c52188e',
      },
      {
        id: 4,
        image: 'https://img.freepik.com/free-photo/young-man-shopping-menswear-store-talking-phone_1303-31020.jpg?w=826&t=st=1685207978~exp=1685208578~hmac=aaf643364386b819fcc6071b49440d73e112d283432eececf892be4aad99ec2f',
      },
      {
        id: 5,
        image: 'https://img.freepik.com/free-photo/young-man-choosing-cloths-menswear-shop_1303-30756.jpg?w=826&t=st=1685207962~exp=1685208562~hmac=ccdf246307ec4ab3dd2dc6db03535480bb17d4fd47861063190e67277f7d7d85',
      },
    ];

    return (
      <Carousel
        autoPlay={!isHovered}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={70}
        dynamicHeight
        stopOnHover={false}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        {unis.map((uni) => (
          <div key={uni.id} className="carousel-slide">
            <img src={uni.image} alt="cars.com" />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Slider;
