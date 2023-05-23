import React from 'react';
import { WrapTags } from './Filter.styles';

function Filter(props) {
  const { categories } = props || [];
  return (
    <WrapTags>
      <ul>
        {categories?.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </WrapTags>
  );
}
export default Filter;
