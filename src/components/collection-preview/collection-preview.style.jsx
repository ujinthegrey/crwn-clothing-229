import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  line-height: 80px;
  margin-bottom: 25px;
  cursor: pointer;
  color: #333;
  padding-left: 60px;
  border-left: 40px solid #333;
  border-radius: 50%;
  adding-left: 20px;
  &:hover {
    opacity: .7;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap:20px;
`;