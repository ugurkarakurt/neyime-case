import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContainer, Categories } from './categories-preview.styles';
import SlideEffect from '../../components/slide-effect/slide-effect.component';

const CategoriesPreview = () => {
  const { groupedCategoryMap } = useContext(CategoriesContext);

  return (
    <CategoriesContainer>
      <Categories>
        <SlideEffect />
        {
          Object.keys(groupedCategoryMap).map(title => {
            const odds = groupedCategoryMap[title];
            return (
              <CategoryPreview key={title} title={title} odds={odds} />
            )
          })
        }
      </Categories>
    </CategoriesContainer>

  );
};

export default CategoriesPreview;
