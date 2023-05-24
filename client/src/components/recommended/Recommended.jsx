import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import SimpleImageSlider from 'react-simple-image-slider';
// import SearchedItem from '../searchedItem/SearchedItem.jsx';

// const recommendedProducts = [
//   <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="1" price="15" />,
//   <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="2" price="15" />,
//   <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="3" price="15" />,
//   <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="4" price="15" />,
//   <SearchedItem img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" title="5" price="15" />,
// ];

const photos = [
  {
    url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  },
  {
    url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
  {
    url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  },
  {
    url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
  {
    url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  },
  {
    url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
  {
    url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  },
];

function Recommended() {
  const [imageNum, setImageNum] = useState(1);

  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={250}
        images={photos}
        showNavs
        autoPlayDelay={3}
        onStartSlide={(index) => {
          setImageNum(index);
        }}
      />
      <div style={{ fontSize: '1.5rem' }}>
        The current image slide No is
        {' '}
        {imageNum}
        .
      </div>
    </div>
  );
}

export default Recommended;
