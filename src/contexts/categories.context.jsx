import { createContext, useState, useEffect } from 'react';
import { request } from '../utils/request/request.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => { },
  groupedCategoryMap: '',
  setGroupedCategoryMap: () => { },
  categoryNames: [],
  setCategoryNames: () => { },
  categoryOpened: false,
  setCategoryOpened: () => { },
  searchValue: '',
  setSearchValue: () => { },
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [groupedCategoryMap, setGroupedCategoryMap] = useState({});
  const [categoryNames, setCategoryNames] = useState([]);
  const [categoryOpened, setCategoryOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getCategoriesMap = async () => {
      await request('https://neyime-3f3b4a448a43.herokuapp.com/list')
        .then((categoryDatas) => {
          setCategoriesMap(categoryDatas);
          return categoryDatas;
        })
        .then((groupedCategoryDatas) => {
          const grouped = groupedCategoryDatas.reduce((groups, title) => {
            const { LN } = title;
            if (!groups[LN]) {
              groups[LN] = [];
            }
            groups[LN].push(title);
            return groups;
          }, {});
          const allGrouped = { ...grouped, 'ALL': [...groupedCategoryDatas] };
          setGroupedCategoryMap(allGrouped);
        });
    };
    getCategoriesMap();
  }, []);

  useEffect(() => {
    setCategoryNames(Object.keys(groupedCategoryMap));
  }, [groupedCategoryMap]);


  const value = {
    categoriesMap,
    setCategoriesMap,
    groupedCategoryMap,
    categoryNames,
    categoryOpened,
    setCategoryOpened,
    searchValue,
    setSearchValue
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
