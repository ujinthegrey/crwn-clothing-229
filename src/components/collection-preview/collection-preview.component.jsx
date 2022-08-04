import React from 'react';
import { useNavigate } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.style';

const CollectionPreview = ({ title, routeName, items }) => {
  let navigate = useNavigate
  ();
  return(
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => navigate(`/shop/${routeName}`) }>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
  );   
}

export default CollectionPreview