import React from 'react';
import { WrapTags, Tags, TagsListItem } from './Filter.styles';

function Filter(props) {
  const { categories } = props || [];
  return (
    <WrapTags>
      <Tags>
        {categories?.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TagsListItem key={index}>{category}</TagsListItem>
        ))}
      </Tags>
    </WrapTags>
  );
}
export default Filter;
