import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import AllArrow from '../../assets/images/icons/all-arrow.svg'

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, bets }) => {
  const [click] = useSound(buttonClickSound, { volume: 1 });

  return (
    <div className="category-preview-container">
      <h2>
        <Link onClick={click} className="title" to={title}>
          {title.toUpperCase()}
          <img src={AllArrow} alt={AllArrow} />
        </Link>
      </h2>
      <div className="preview">
        {bets
          .filter((_, idx) => idx < 5)
          .map((bet) => (
            <ProductCard key={bet.NID} bet={bet} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
