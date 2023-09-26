import ProductCardItem from '../product-card-item/product-card-item.component';

import { Divider, ProductCardContainer, ProductCardHeader, ProductCardBody, ProdcutCardSection, ProdcutCardDate, ProdcutCardCategoryName, ProductCardFooter } from './product-card.styles';

const ProductCard = ({ odd }) => {
  const rowID = odd.C;

  const returnProps = (showBody, title, rowID, league, itemID, betName, odd) => {
    return { showBody, title, rowID, league, itemID, betName, odd }
  }

  return (
    <ProductCardContainer>
      <ProductCardHeader>
        <ProdcutCardCategoryName>
          {odd.LN}
        </ProdcutCardCategoryName>
        <ProdcutCardDate>
          {odd.D} / {odd.DAY} / {odd.T}
        </ProdcutCardDate>
      </ProductCardHeader>

      <ProductCardFooter>
        <span>{odd.C}</span>
        <span>{odd.N}</span>
      </ProductCardFooter>

      <ProductCardBody>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(false, odd.C, '', '', '', '', '')} />
          <ProductCardItem props={returnProps(false, odd.N, '', '', '', '', '')} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, '1', rowID, odd.LN, `${rowID}MS1${odd.OCG[1].OC[0].O}`, odd.N, odd.OCG[1].OC[0].O)} />
          <ProductCardItem props={returnProps(true, 'x', rowID, odd.LN, `${rowID}MS=0${odd.OCG[1].OC[1].O}`, odd.N, odd.OCG[1].OC[1].O)} />
          <ProductCardItem props={returnProps(true, '2', rowID, odd.LN, `${rowID}MS2${1}`, odd.N, '1')} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, 'Alt', rowID, odd.LN, `${rowID}ALT${odd.OCG[5].OC[25].O}`, odd.N, odd.OCG[5].OC[25].O)} />
          <ProductCardItem props={returnProps(true, 'Üst', rowID, odd.LN, `${rowID}ÜST${odd.OCG[5].OC[26].O}`, odd.N, odd.OCG[5].OC[26].O)} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, 'H1', rowID, odd.LN, `${rowID}H1${1}`, odd.N, '1')} />
          <ProductCardItem props={returnProps(true, '1', rowID, odd.LN, `${rowID}HX1${1}`, odd.N, '1')} />
          <ProductCardItem props={returnProps(true, 'x', rowID, odd.LN, `${rowID}HX0${1}`, odd.N, '1')} />
          <ProductCardItem props={returnProps(true, '2', rowID, odd.LN, `${rowID}HX2${1}`, odd.N, '1')} />
          <ProductCardItem props={returnProps(true, 'H2', rowID, odd.LN, `${rowID}H2${1}`, odd.N, '1')} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, '1-H', rowID, odd.LN, `${rowID}1-X${odd.OCG[2].OC[3].O}`, odd.N, odd.OCG[2].OC[3].O)} />
          <ProductCardItem props={returnProps(true, '1-2', rowID, odd.LN, `${rowID}1-2${odd.OCG[2].OC[4].O}`, odd.N, odd.OCG[2].OC[4].O)} />
          <ProductCardItem props={returnProps(true, 'X-2', rowID, odd.LN, `${rowID}X-2${odd.OCG[2].OC[5].O}`, odd.N, odd.OCG[2].OC[5].O)} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, 'Var', rowID, odd.LN, `${rowID}VAR${1}`, odd.N, '1')} />
          <ProductCardItem props={returnProps(true, 'Yok', rowID, odd.LN, `${rowID}YOK${1}`, odd.N, '1')} />
        </ProdcutCardSection>

      </ProductCardBody>
      <Divider></Divider>

    </ProductCardContainer>
  );
};

export default ProductCard;
