import { createContext, useState, useEffect } from 'react';
import { request } from '../utils/request/request.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [groupedCategoryMap, setGroupedCategoryMap] = useState({});
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      await request('https://nesine-case-study.onrender.com/bets')
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
            return groups
          }, {});
          setGroupedCategoryMap(grouped);
        })
    };
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   setCategoryNames(Object.keys(groupedCategoryMap))
  // }, [groupedCategoryMap])



  const value = { categoriesMap, setCategoriesMap, groupedCategoryMap, categoryNames };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};