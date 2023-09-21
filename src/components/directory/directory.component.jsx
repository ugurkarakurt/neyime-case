import { useContext, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles.jsx';

const Directory = () => {
  const { categoryNames, categoryOpened, setCategoryOpened } = useContext(CategoriesContext);

  useEffect(() => {
    setCategoryOpened(false);
  }, []);

  return (
    <DirectoryContainer categoryOpened={categoryOpened}>
      {categoryNames.map((category) => (
        <DirectoryItem key={category} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
