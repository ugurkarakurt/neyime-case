import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, bets }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {bets
          .filter((_, idx) => idx < 4)
          .map((bet) => (
            <ProductCard bet={bet} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
