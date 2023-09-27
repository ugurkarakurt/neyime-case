import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryContainerTitle, ListContainer } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { odds, filteredOdds, setCategoryName } = useContext(CategoriesContext);
  const [rowHeight, setRowHeight] = useState(77);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 420) {
        setRowHeight(165);
        return;
      }

      if (window.innerWidth <= 1200) {
        setRowHeight(144);
        return;
      }

      setRowHeight(77);
    }
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);


  useEffect(() => {
    setCategoryName(category);
  }, [category, setCategoryName]);


  const itemSize = rowHeight;
  const itemCount = filteredOdds ? filteredOdds.length : 0;

  const Row = ({ index, style }) => (
    <div style={style} >
      {filteredOdds && <ProductCard odd={filteredOdds[index]} />}
    </div>
  );

  return (
    <CategoryContainer>
      <CategoryContainerTitle>{category.toUpperCase()}</CategoryContainerTitle>
      {filteredOdds && (
        <ListContainer
          height={600}
          itemCount={itemCount}
          itemSize={itemSize}
          width={'100%'}
        >
          {Row}
        </ListContainer>
      )}
    </CategoryContainer>
  );
}

export default Category;
