import ProductCardItem from '../product-card-item/product-card-item.component';
import { v4 as uuidv4 } from "uuid";


import './product-card.styles.scss';

const ProductCard = ({ bet }) => {
  const rowID = uuidv4();

  return (
    <div className='product-card-container'>
      <div className="product-card-header">
        <div className="date">
          {bet.D} / {bet.DAY} / {bet.T}
        </div>
        <div className="category-name">
          {bet.LN}
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-card-section">
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={bet.C} rate={''} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={bet.N} rate={''} />
        </div>
        <div className="product-card-section">
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'1'} rate={bet.OCG[1].OC[0].O} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'x'} rate={bet.OCG[1].OC[1].O} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'2'} rate={'1'} />
        </div>
        <div className="product-card-section">
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'Alt'} rate={bet.OCG[5].OC[25].O} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'Üst'} rate={bet.OCG[5].OC[26].O} />
        </div>
        <div className="product-card-section">
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'H1'} rate={'1'} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'1'} rate={'1'} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'x'} rate={'1'} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'2'} rate={'1'} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'H2'} rate={'1'} />
        </div>
        <div className="product-card-section">
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'1-X'} rate={bet.OCG[2].OC[3].O} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'1-2'} rate={bet.OCG[2].OC[4].O} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'X-2'} rate={bet.OCG[2].OC[5].O} />
        </div>
        <div className="product-card-section">
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'Var'} rate={'1'} />
          <ProductCardItem id={rowID} itemID={uuidv4()} betName={bet.LN} title={'Yok'} rate={'1'} />

        </div>
      </div>

      {/* <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button> */}
    </div>
  );
};

export default ProductCard;
