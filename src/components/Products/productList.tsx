import styled from "styled-components";
import ProductCard from "./productCard";

const ProductList = () => {
  return ( 
    <GridList>
      <ProductCard />
    </GridList>
   );
}
 
export default ProductList;

const GridList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`