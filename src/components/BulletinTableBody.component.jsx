import React from 'react';
import { useData } from '../context/DataContext';

export default function BulletinTableBody() {
  const { currentData } = useData();

  const handleClick = (column) => {
    console.log(column);
    if (!column.matches('.calculable')) {
      return;
    }
  }

  return (
    <div className="bulletin-table-body">
      {currentData.map((data, index) => (
        <div className="bulletin-table-row" key={index}>
          <ul className='buttletin-table-row-header'>
            <li>{data.D} {data.DAY} {data.LN}</li>
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
          <ul className='buttletin-table-row-body' onClick={(e) => handleClick(e.target)}>
            <li>{data.C} {data.T} {data.N}</li>
            <li>Yorumlar</li>
            <li className='calculable' data-rate={data.OCG[1].MBS}>{data.OCG[1].MBS}</li>
            <li className='calculable' data-rate={data.OCG[1].OC[0].O}>{data.OCG[1].OC[0].O}</li>
            <li className='calculable' data-rate={data.OCG[1].OC[1].O}>{data.OCG[1].OC[1].O}</li>
            <li className='calculable' data-rate={data.OCG[1].OC[1].O}></li>
            <li className='calculable' data-rate={data.OCG[5].OC[25].O}>{data.OCG[5].OC[25].O}</li>
            <li className='calculable' data-rate={data.OCG[5].OC[26].O}>{data.OCG[5].OC[26].O}</li>
            <li className='calculable'></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li className='calculable' data-rate={data.OCG[2].OC[3].O}>{data.OCG[2].OC[3].O}</li>
            <li className='calculable' data-rate={data.OCG[2].OC[4].O}>{data.OCG[2].OC[4].O}</li>
            <li className='calculable' data-rate={data.OCG[2].OC[5].O}>{data.OCG[2].OC[5].O}</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      ))}
    </div>
  )
}
