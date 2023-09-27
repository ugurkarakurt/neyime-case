import { createContext, useState, useEffect } from 'react';
import { request } from '../utils/request/request.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => { },
  groupedCategoryMap: '',
  setGroupedCategoryMap: () => { },
  categoryNames: [],
  setCategoryNames: () => { },
  categoryName: '',
  setCategoryName: () => { },
  categoryOpened: false,
  setCategoryOpened: () => { },
  odds: [],
  setOdds: () => { },
  filteredItems: () => { },
  filteredOdds: [],
  setFilteredODds: () => { },
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [groupedCategoryMap, setGroupedCategoryMap] = useState({});
  const [categoryNames, setCategoryNames] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryOpened, setCategoryOpened] = useState(false);
  const [odds, setOdds] = useState([]);
  const [filteredOdds, setFilteredODds] = useState(odds);

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

  useEffect(() => {
    if (categoryName && groupedCategoryMap[categoryName]) {
      setOdds(groupedCategoryMap[categoryName]);
    }
  }, [categoryName, groupedCategoryMap]);

  useEffect(() => {
    if (odds) {
      setFilteredODds(odds);
    }
  }, [odds]);

  const filteredItems = (searchField) => {
    const newFilteredOdds = odds.filter((odd) => odd.N.replace(/\s/g, '').toLowerCase().includes(searchField.replace(/\s/g, '').toLowerCase())
    );
    setFilteredODds(newFilteredOdds);
  };

  const value = {
    categoriesMap,
    setCategoriesMap,
    groupedCategoryMap,
    categoryNames,
    categoryOpened,
    setCategoryOpened,
    setCategoryName,
    filteredItems,
    filteredOdds,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
