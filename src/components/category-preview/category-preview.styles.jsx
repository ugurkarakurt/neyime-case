import styled from "styled-components";
import { Link } from "react-router-dom";


export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 21px;
`;

export const CategoryPreviewTitle = styled.h2`
  padding-bottom: 14px;
  font-size: 14px;
  border-bottom: 1px solid rgba(240, 230, 210, 0.1);
`;

export const CategoryPreviewLink = styled(Link)`
  cursor: pointer;
  color: #c89b3c;
  transition: 0.1s ease;
  display: flex;
  align-items: center;

  img {
    margin-left: 5px;
    width: 14px;
    margin-bottom: 2px;
  }
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
`;
