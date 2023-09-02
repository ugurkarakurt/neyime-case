import React from 'react';
import { useData } from '../../context/DataContext';

export default function BulletinTableBody() {
  const { currentData, addItemToCart } = useData();
  return (
    <div className="bulletin-table-body">
      {currentData.map((data, index) => (
        <div className="bulletin-table-row" data-id={data.NID} key={index}>
          <ul className='buttletin-table-row-header'>
            <li><span>{data.D}</span> <span>{data.DAY}</span> <span>{data.LN}</span></li>
            <li>Yorumlar</li>
            <li></li>
            <li>1</li>
            <li>x</li>
            <li>2</li>
            <li>Alt</li>
            <li>Üst</li>
            <li>H1</li>
            <li>1</li>
            <li>x</li>
            <li>2</li>
            <li>H2</li>
            <li>1-X</li>
            <li>1-2</li>
            <li>X-2</li>
            <li>Var</li>
            <li>Yok</li>
            <li>+99</li>
          </ul>
          <ul className='buttletin-table-row-body' onClick={(e) => addItemToCart(e.target, data)}>
            <li><span>{data.C}</span> <span>{data.T}</span> <span>{data.N}</span></li>
            <li>Yorumlar</li>
            <li data-rate={data.OCG[1].MBS}>{data.OCG[1].MBS}</li>
            <li data-rate={data.OCG[1].OC[0].O}>{data.OCG[1].OC[0].O}</li>
            <li data-rate={data.OCG[1].OC[1].O}>{data.OCG[1].OC[1].O}</li>
            <li></li>
            <li data-rate={data.OCG[5].OC[25].O}>{data.OCG[5].OC[25].O}</li>
            <li data-rate={data.OCG[5].OC[26].O}>{data.OCG[5].OC[26].O}</li>
            <li ></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li data-rate={data.OCG[2].OC[3].O}>{data.OCG[2].OC[3].O}</li>
            <li data-rate={data.OCG[2].OC[4].O}>{data.OCG[2].OC[4].O}</li>
            <li data-rate={data.OCG[2].OC[5].O}>{data.OCG[2].OC[5].O}</li>
            <li></li>
            <li></li>
            <li>3</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
