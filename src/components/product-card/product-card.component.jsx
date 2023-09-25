import ProductCardItem from '../product-card-item/product-card-item.component';

import { Divider, ProductCardContainer, ProductCardHeader, ProductCardBody, ProdcutCardSection, ProdcutCardDate, ProdcutCardCategoryName, ProductCardFooter } from './product-card.styles';

const ProductCard = ({ bet }) => {
  const rowID = bet.C;

  const returnProps = (showBody, title, rowID, league, itemID, betName, rate) => {
    return { showBody, title, rowID, league, itemID, betName, rate }
  }

  return (
    <ProductCardContainer>
      <ProductCardHeader>
        <ProdcutCardCategoryName>
          {bet.LN}
        </ProdcutCardCategoryName>
        <ProdcutCardDate>
          {bet.D} / {bet.DAY} / {bet.T}
        </ProdcutCardDate>
      </ProductCardHeader>

      <ProductCardFooter>
        <span>{bet.C}</span>
        <span>{bet.N}</span>
      </ProductCardFooter>

      <ProductCardBody>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(false, bet.C, '', '', '', '', '')} />
          <ProductCardItem props={returnProps(false, bet.N, '', '', '', '', '')} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, '1', rowID, bet.LN, `${rowID}MS1${bet.OCG[1].OC[0].O}`, bet.N, bet.OCG[1].OC[0].O)} />
          <ProductCardItem props={returnProps(true, 'x', rowID, bet.LN, `${rowID}MS=0${bet.OCG[1].OC[1].O}`, bet.N, bet.OCG[1].OC[1].O)} />
          <ProductCardItem props={returnProps(true, '2', rowID, bet.LN, `${rowID}MS2${1}`, bet.N, '1')} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, 'Alt', rowID, bet.LN, `${rowID}ALT${bet.OCG[5].OC[25].O}`, bet.N, bet.OCG[5].OC[25].O)} />
          <ProductCardItem props={returnProps(true, 'Üst', rowID, bet.LN, `${rowID}ÜST${bet.OCG[5].OC[26].O}`, bet.N, bet.OCG[5].OC[26].O)} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, 'H1', rowID, bet.LN, `${rowID}H1${1}`, bet.N, '1')} />
          <ProductCardItem props={returnProps(true, '1', rowID, bet.LN, `${rowID}HX1${1}`, bet.N, '1')} />
          <ProductCardItem props={returnProps(true, 'x', rowID, bet.LN, `${rowID}HX0${1}`, bet.N, '1')} />
          <ProductCardItem props={returnProps(true, '2', rowID, bet.LN, `${rowID}HX2${1}`, bet.N, '1')} />
          <ProductCardItem props={returnProps(true, 'H2', rowID, bet.LN, `${rowID}H2${1}`, bet.N, '1')} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, '1-H', rowID, bet.LN, `${rowID}1-X${bet.OCG[2].OC[3].O}`, bet.N, bet.OCG[2].OC[3].O)} />
          <ProductCardItem props={returnProps(true, '1-2', rowID, bet.LN, `${rowID}1-2${bet.OCG[2].OC[4].O}`, bet.N, bet.OCG[2].OC[4].O)} />
          <ProductCardItem props={returnProps(true, 'X-2', rowID, bet.LN, `${rowID}X-2${bet.OCG[2].OC[5].O}`, bet.N, bet.OCG[2].OC[5].O)} />
        </ProdcutCardSection>

        <ProdcutCardSection>
          <ProductCardItem props={returnProps(true, 'Var', rowID, bet.LN, `${rowID}VAR${1}`, bet.N, '1')} />
          <ProductCardItem props={returnProps(true, 'Yok', rowID, bet.LN, `${rowID}YOK${1}`, bet.N, '1')} />
        </ProdcutCardSection>

      </ProductCardBody>
      <Divider></Divider>

    </ProductCardContainer>
  );
};

export default ProductCard;
