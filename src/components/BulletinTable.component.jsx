import React from 'react';
import BulletinTableHeader from './BulletinTableHeader.component';
import BulletinTableBody from './BulletinTableBody.component';

export default function BulletinTable() {

  return (
    <>
      <div className="bulletin-table">
        <BulletinTableHeader />
        <BulletinTableBody />
      </div>
    </>
  )
}
