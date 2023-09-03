// DataList.js
import React from 'react';
import BulletinTableHeader from './BulletinTableHeader.component';
import BulletinTableBody from './BulletinTableBody.component';

const Bulletin = () => {
  return (
    <div className='bulletin-table-wrapper'>
      <div className="bulletin-table">
        <BulletinTableHeader />
        <BulletinTableBody />
      </div>
    </div>
  );
}

export default Bulletin;
