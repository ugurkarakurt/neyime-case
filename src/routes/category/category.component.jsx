import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { FixedSizeList as List } from 'react-window';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { groupedCategoryMap } = useContext(CategoriesContext);
  const [bets, setBets] = useState(groupedCategoryMap[category]);
  console.log(groupedCategoryMap);

  useEffect(() => {
    setBets(groupedCategoryMap[category]);
  }, [category, groupedCategoryMap]);

  const itemSize = 100;
  const itemCount = bets ? bets.length : 0;

  const Row = ({ index, style }) => (
    <div style={style} >
      {bets && <ProductCard bet={bets[index]} />}
    </div>
  );

  return (
    <div className='category-container'>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {bets && (

        <List
          height={1000}
          itemCount={itemCount}
          itemSize={itemSize}
          width={'100%'}
        >
          {Row}
        </List>
      )}
    </div>
  );
}

export default Category;
