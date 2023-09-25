import ProductCard from "../product-card/product-card.component";
import AllArrow from '../../assets/images/icons/all-arrow.svg';

import { CategoryPreviewContainer, Preview, CategoryPreviewLink, CategoryPreviewTitle } from "./category-preview.styles.jsx";

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';

import "./category-preview.styles.jsx";

const CategoryPreview = ({ title, bets }) => {
  const [click] = useSound(buttonClickSound, { volume: 1 });


  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle>
        <CategoryPreviewLink onClick={click} to={title}>
          {title.toUpperCase()}
          <img src={AllArrow} alt={AllArrow} />
        </CategoryPreviewLink>
      </CategoryPreviewTitle>
      <Preview>
        {bets
          .filter((_, idx) => idx < 5)
          .map((bet) => (
            <ProductCard key={bet.NID} bet={bet} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
