import ProductCard from "../product-card/product-card.component";
import AllArrow from '../../assets/images/icons/all-arrow.svg';

import { CategoryPreviewContainer, Preview, CategoryPreviewLink, CategoryPreviewTitle } from "./category-preview.styles.jsx";

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';

import "./category-preview.styles.jsx";

const CategoryPreview = ({ title, odds }) => {
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
        {odds
          .filter((_, idx) => idx < 5)
          .map((odd) => (
            <ProductCard key={odd.NID} odd={odd} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
