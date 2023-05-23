import React from 'react';
import { WrapTags, Tags, TagsListItem } from './Filter.styles';

function Filter(props) {
  const { categories } = props || [];
  return (
    <WrapTags>
      <Tags>
        {categories?.map((category) => (
          <TagsListItem>{category}</TagsListItem>
        ))}
      </Tags>
    </WrapTags>
  );
}
export default Filter;
