import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = () => {
  const { categoryNames } = useContext(CategoriesContext)

  return (
    <div className='directory-container'>
      {categoryNames.map((category) => (
        <DirectoryItem key={category} category={category} />
      ))}
    </div>
  );
};

export default Directory;
