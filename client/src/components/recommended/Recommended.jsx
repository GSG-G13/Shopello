import React, { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from 'react-responsive-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SearchedItem from '../searchedItem/SearchedItem';
import './styled.css';

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [products, setProducts] = useState([]);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.data.products))
      .catch((error) => console.log(error));
  }, []);

  products.map((ele) => console.log(ele));
  const components = [
    {
      id: 1,
      content: <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="1" price="15" />,
    },
    {
      id: 1,
      content: <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="5" price="15" />,
    },
    {
      id: 1,
      content: <SearchedItem img="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" title="4" price="15" />,
    },
    {
      id: 1,
      content: <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="3" price="15" />,
    },
    {
      id: 1,
      content: <SearchedItem img="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" title="2" price="15" />,
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
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {components.map((uni) => (
        <div style={{ height: '200px' }} key={uni.id} className="carousel-slide">
          {uni.content}
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
