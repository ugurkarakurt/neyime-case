import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://nesine-case-study.onrender.com/bets';
const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [grouppedData, setGrouppedData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  (function () {
    const body = document.querySelector("body");
    body.onscroll = function () {
      if (window.scrollY > (document.body.offsetHeight - window.outerHeight)) {
        setCurrentPage(currentPage + 1);
        setCurrentData([...currentData, ...grouppedData[currentPage]])
      }
    }
  })();

  async function getData() {
    try {
      const response = await axios.get(BASE_URL);
      const responseData = response.data;
      const grouppedData = [];

      for (let i = 0; i < responseData.length; i += 50) {
        const grouppedArray = responseData.slice(i, i + 50);
        grouppedData.push(grouppedArray);
      }
      setGrouppedData([...grouppedData]);
      setCurrentData(grouppedData[currentPage]);

    } catch (error) {
      console.error('API error:', error);
    }
  }

  return (
    <DataContext.Provider value={{ currentData, getData }}>
      {children}
    </DataContext.Provider>
  );
}
