import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContainer } from './categories-preview.styles';

const CategoriesPreview = () => {
  const { groupedCategoryMap } = useContext(CategoriesContext);

  return (
    <CategoriesContainer>
      {
        Object.keys(groupedCategoryMap).map(title => {
          const bets = groupedCategoryMap[title];
          return (
            <CategoryPreview key={title} title={title} bets={bets} />
          )
        })
      }
    </CategoriesContainer>

  );
};

export default CategoriesPreview;
