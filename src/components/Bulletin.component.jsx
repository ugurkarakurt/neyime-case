// DataList.js
import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
import BulletinTable from './BulletinTable.component';

function Bulletin() {
  const { getData } = useData();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bulletin-table-wrapper'>
      <BulletinTable />
    </div>
  );
}

export default Bulletin;
